"use client";

import { useStore } from "@/store/useStore";
import { useEffect, useState } from "react";
import { Maximize2, MoreVertical, Signal } from "lucide-react";

export default function CCTVFeed() {
  const isSpotBooked = useStore((state) => state.isSpotBooked);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800 group">
      {/* Header Overlay */}
      <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent z-10 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-white font-mono text-xs tracking-widest">
              LIVE FEED • CAM_04
            </span>
          </div>
          <p className="text-gray-400 text-[10px] mt-1">
            Sector B • Residential Driveway
          </p>
        </div>
        <div className="flex gap-2">
          <Signal className="text-green-500 h-4 w-4" />
          <Maximize2 className="text-white h-4 w-4 opacity-50" />
        </div>
      </div>

      {/* The "Video" (We use a gray bg or actual video placeholder) */}
      <div className="w-full h-full bg-gray-900 flex items-center justify-center relative">
        {/* PRO TIP: For the pitch, download a generic 'parking lot cctv' video 
            from Pexels/YouTube and put it in public/images/demo.mp4. 
            Then uncomment the video tag below.
         */}
        {/* <video src="/images/demo.mp4" autoPlay loop muted className="w-full h-full object-cover opacity-60" /> */}

        {/* Fallback Static Image if no video */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-50" />

        {/* AI OVERLAYS */}

        {/* Spot 1: Always Occupied */}
        <div className="absolute top-[40%] left-[20%] w-[25%] h-[35%] border-2 border-red-500 bg-red-500/10 backdrop-blur-[1px] rounded-lg flex items-center justify-center">
          <span className="bg-red-600 text-white text-[10px] px-1 font-bold absolute -top-3 left-0">
            OCCUPIED
          </span>
        </div>

        {/* Spot 2: The "Magic" Spot (Changes color when you book!) */}
        <div
          className={`absolute top-[40%] right-[20%] w-[25%] h-[35%] border-2 transition-all duration-500 rounded-lg flex items-center justify-center
            ${isSpotBooked ? "border-red-500 bg-red-500/10" : "border-green-500 bg-green-500/10"}`}
        >
          <span
            className={`text-white text-[10px] px-1 font-bold absolute -top-3 left-0 transition-colors duration-300
                ${isSpotBooked ? "bg-red-600" : "bg-green-600"}`}
          >
            {isSpotBooked ? "OCCUPIED" : "AVAILABLE"}
          </span>
        </div>
      </div>

      {/* AI Stats Overlay */}
      <div className="absolute bottom-4 left-4 z-10">
        <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
          <p className="text-[10px] text-green-400 font-mono">
            AI CONFIDENCE: 98.4%
          </p>
        </div>
      </div>
    </div>
  );
}
