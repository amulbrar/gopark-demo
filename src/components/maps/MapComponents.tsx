"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix for default Leaflet markers in Next.js
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface MapProps {
  onBook: () => void;
}

export default function MapComponent({ onBook }: MapProps) {
  // Center roughly on a "tech park" location (e.g., Bangalore or similar)
  const position: [number, number] = [12.9716, 77.5946];

  return (
    <div className="h-full w-full relative z-0">
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        {/* Dummy Spot 1 - Occupied */}
        <Marker position={[12.9716, 77.5946]} icon={icon}>
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-red-500">Spot #A1 (Occupied)</h3>
            </div>
          </Popup>
        </Marker>

        {/* Dummy Spot 2 - AVAILABLE */}
        <Marker
          position={[12.972, 77.595]}
          icon={icon}
          eventHandlers={{
            click: () => {
              // Open the booking drawer logic here if needed,
              // but we handle it via the parent UI for simplicity
            },
          }}
        >
          <Popup>
            <div className="p-2 flex flex-col gap-2">
              <h3 className="font-bold text-green-600">Spot #B2 (Available)</h3>
              <p className="text-xs text-gray-500">Private Driveway • ₹50/hr</p>
              <button
                onClick={onBook}
                className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-md active:scale-95 transition-transform"
              >
                Select Spot
              </button>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
