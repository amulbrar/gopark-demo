import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, Car, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-gray-50">
      {/* Header */}
      <div className="w-full flex justify-between items-center mt-4">
        <h1 className="text-2xl font-bold text-primary tracking-tight">
          GoPark.
        </h1>
        <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
          <Image
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
            alt="User"
            width={32}
            height={32}
          />
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center space-y-6 mt-10">
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-blue-100 blur-xl opacity-70"></div>
          <Car className="relative h-20 w-20 text-primary" />
        </div>
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
          Guaranteed <br /> <span className="text-primary">Arrival.</span>
        </h2>
        <p className="text-gray-500 max-w-[300px]">
          Stop circling. Book a private driveway or VIP mall spot in seconds.
        </p>
      </div>

      {/* Value Props */}
      <div className="w-full grid grid-cols-2 gap-4 my-8">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
          <ShieldCheck className="h-8 w-8 text-green-500 mb-2" />
          <span className="text-sm font-semibold">No Ghosting</span>
          <span className="text-xs text-gray-400">Deposit Protected</span>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
          <MapPin className="h-8 w-8 text-blue-500 mb-2" />
          <span className="text-sm font-semibold">Smart Find</span>
          <span className="text-xs text-gray-400">AI Detection</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full space-y-4 mb-8">
        <Link href="/booking" className="w-full">
          <Button className="w-full h-14 text-lg shadow-lg shadow-blue-200">
            Find a Spot
          </Button>
        </Link>

        <Link href="/dashboard" className="w-full">
          <Button
            variant="outline"
            className="w-full h-14 text-lg border-2 bg-transparent text-gray-600 hover:bg-gray-50"
          >
            List My Space
          </Button>
        </Link>
      </div>
    </main>
  );
}