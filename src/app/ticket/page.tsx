"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Home, Navigation } from "lucide-react";

export default function TicketPage() {
  const [timeLeft] = useState("01:45:30");

  return (
    <main className="min-h-screen bg-blue-600 text-white p-6 flex flex-col justify-between relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl -mr-16 -mt-16 opacity-50"></div>

      {/* Top Status */}
      <div className="relative z-10 pt-10">
        <div className="flex items-center gap-2 mb-2 opacity-90">
          <CheckCircle2 className="h-5 w-5" />
          <span className="font-medium tracking-wide">BOOKING CONFIRMED</span>
        </div>
        <h1 className="text-4xl font-bold">GoPark.</h1>
      </div>

      {/* Center Timer */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-2">
        <span className="text-blue-200 text-sm font-medium uppercase tracking-widest">
          Time Remaining
        </span>
        <div className="text-6xl font-mono font-bold tracking-tighter">
          {timeLeft}
        </div>
        <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl mt-8 border border-white/20">
          <p className="text-center text-sm font-medium text-blue-100">
            ETA to Destination
          </p>
          <p className="text-center text-2xl font-bold">14:00</p>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="relative z-10 space-y-4 pb-8">
        <Button className="w-full h-14 bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg shadow-lg">
          <Navigation className="mr-2 h-5 w-5" /> Navigate to Spot
        </Button>

        <Link href="/" className="block w-full">
          <Button
            variant="ghost"
            className="w-full text-blue-100 hover:text-white hover:bg-blue-500/50"
          >
            <Home className="mr-2 h-5 w-5" /> Back to Home
          </Button>
        </Link>
      </div>
    </main>
  );
}
