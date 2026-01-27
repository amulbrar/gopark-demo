"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

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
  // Center roughly on a generic city location
  const position: [number, number] = [12.9716, 77.5946];

  return (
    <div className="h-full w-full relative z-0">
      <MapContainer
        center={position}
        zoom={15}
        zoomControl={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        {/* Occupied Spot (Red) */}
        <Marker position={[12.9716, 77.5946]} icon={icon}>
          <Popup>
            <div className="font-sans text-center">
              <h3 className="font-bold text-red-500 mb-1">Spot #A1</h3>
              <span className="text-xs font-bold bg-red-100 text-red-600 px-2 py-1 rounded-full">
                Occupied
              </span>
            </div>
          </Popup>
        </Marker>

        {/* Available Spot (Green - Clickable) */}
        <Marker
          position={[12.9725, 77.5955]}
          icon={icon}
          eventHandlers={{
            click: () => {
              // We handle the click via the popup button for better UX
            },
          }}
        >
          <Popup>
            <div className="font-sans min-w-[150px]">
              <h3 className="font-bold text-green-600 text-lg">Spot #B2</h3>
              <p className="text-xs text-gray-500 mb-3">
                Private Driveway • ₹50/hr
              </p>
              <button
                onClick={onBook}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-2 px-4 rounded-lg shadow-md transition-all active:scale-95"
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
