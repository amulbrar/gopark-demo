"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, CreditCard, ShieldCheck } from "lucide-react";
import { useStore } from "@/store/useStore";

// Dynamically import the Map to avoid "window is not defined" error
const MapComponent = dynamic(() => import("@/components/maps/MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-gray-100 flex items-center justify-center text-gray-400">
      Loading Map...
    </div>
  ),
});

export default function BookingPage() {
  const router = useRouter();
  const bookSpot = useStore((state) => state.bookSpot);

  // State to control the bottom drawer
  const [selected, setSelected] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleSelectSpot = () => {
    setSelected(true);
  };

  const handlePayment = () => {
    setProcessing(true);
    // Simulate API delay
    setTimeout(() => {
      bookSpot(); // UPDATE THE GLOBAL STORE (Magic Moment!)
      router.push("/ticket"); // Go to success page
    }, 1500);
  };

  return (
    <main className="h-screen w-screen flex flex-col relative overflow-hidden bg-white">
      {/* Top Nav */}
      <div className="absolute top-0 left-0 right-0 z-10 p-4 flex items-center justify-between bg-gradient-to-b from-white/90 to-transparent pointer-events-none">
        <Button
          variant="ghost"
          size="icon"
          className="pointer-events-auto bg-white shadow-sm rounded-full h-10 w-10"
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </div>

      {/* Map Area */}
      <div className="flex-1">
        <MapComponent onBook={handleSelectSpot} />
      </div>

      {/* Bottom Selection Drawer */}
      {selected && (
        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.1)] z-20 p-6 animate-in slide-in-from-bottom duration-300">
          <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6" />

          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Premium Driveway
              </h2>
              <p className="text-sm text-gray-500">200m from Destination</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-primary">₹50</span>
              <span className="text-sm text-gray-400">/hr</span>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
              <Clock className="h-4 w-4 text-blue-500" />
              <span>Reserved until 18:00</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-green-100">
              <ShieldCheck className="h-4 w-4 text-green-500" />
              <span>Refundable Deposit Included</span>
            </div>
          </div>

          <Button
            className="w-full h-14 text-lg font-semibold shadow-xl shadow-blue-100"
            onClick={handlePayment}
            disabled={processing}
          >
            {processing ? "Securing Spot..." : "Pay ₹50 Deposit"}
          </Button>
        </div>
      )}
    </main>
  );
}
