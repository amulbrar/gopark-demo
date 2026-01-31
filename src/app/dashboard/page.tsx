"use client";

import { useStore } from "@/store/useStore";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CCTVFeed from "@/components/dashboard/CCTVFeed";
import {
  ArrowLeft,
  BarChart3,
  DollarSign,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function DashboardPage() {
  const availableSlots = useStore((state) => state.availableSlots);

  // Static stats for the demo
  const totalRevenue = 12450;
  const occupancyRate = availableSlots < 138 ? "92%" : "78%"; // Fake dynamic data

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar (Desktop Only) */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col p-6">
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-primary tracking-tight">
            GoPark.
          </h1>
          <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">
            Partner Portal
          </p>
        </div>

        <nav className="space-y-2 flex-1">
          <Button
            variant="secondary"
            className="w-full justify-start text-blue-600 bg-blue-50"
          >
            <LayoutDashboard className="mr-2 h-4 w-4" /> Overview
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-500"
          >
            <BarChart3 className="mr-2 h-4 w-4" /> Analytics
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-500"
          >
            <Users className="mr-2 h-4 w-4" /> Tenants
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-500"
          >
            <Settings className="mr-2 h-4 w-4" /> Settings
          </Button>
        </nav>

        <div className="pt-6 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
              <Image
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Owner"
                alt="Owner"
                width={40}
                height={40}
              />
            </div>
            <div>
              <p className="text-sm font-medium">Amul Brar</p>
              <p className="text-xs text-gray-400">Pro Host</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Mobile Header */}
        <div className="md:hidden flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-primary">GoPark.</h1>
          <Link href="/">
            <Button size="sm" variant="outline">
              Exit
            </Button>
          </Link>
        </div>

        <header className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Dashboard PRO</h2>
            <p className="text-gray-500">
              Welcome back, here&apos;s what&apos;s happening at{" "}
              <span className="font-semibold text-gray-900">Sector B</span>{" "}
              today.
            </p>
          </div>
          <Link href="/" className="hidden md:block">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to App
            </Button>
          </Link>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <span className="text-sm font-medium text-gray-500">
                Total Revenue
              </span>
              <DollarSign className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ₹{totalRevenue.toLocaleString()}
              </div>
              <p className="text-xs text-green-500 mt-1">
                +12.5% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <span className="text-sm font-medium text-gray-500">
                Live Occupancy
              </span>
              <Users className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{occupancyRate}</div>
              <p className="text-xs text-gray-400 mt-1">
                Based on CCTV analysis
              </p>
            </CardContent>
          </Card>
          <Card className="bg-blue-600 text-white border-blue-600">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <span className="text-sm font-medium text-blue-100">
                Available Slots
              </span>
              <LayoutDashboard className="h-4 w-4 text-blue-200" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{availableSlots}</div>
              <p className="text-xs text-blue-100 mt-1">Real-time update</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Feed Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* The Big CCTV Feed */}
          <div className="lg:col-span-2 h-[400px]">
            <h3 className="text-lg font-semibold mb-4">
              Live Camera Feed (AI-Enabled)
            </h3>
            <CCTVFeed />
          </div>

          {/* Recent Activity List */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 h-[400px] overflow-hidden">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 pb-3 border-b border-gray-100 last:border-0"
                >
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xs">
                    KA-0{i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Vehicle Entry Detected
                    </p>
                    <p className="text-xs text-gray-500">
                      Camera 04 • {10 + i} mins ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
