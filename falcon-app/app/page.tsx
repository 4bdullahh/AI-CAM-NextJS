"use client";

import { useState } from "react";
import {
  Bell,
  ChevronDown,
  Home,
  RefreshCw,
  Calendar,
  BarChart3,
  LineChart,
  Camera,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Dashboard() {
  const [expandedRegions, setExpandedRegions] = useState({
    regions: true,
    region1: true,
    region2: false,
    region3: false,
    region4: false,
  });

  type Region = "region1" | "region2" | "region3" | "region4";
  const toggleExpand = (region: Region) => {
    setExpandedRegions((prev) => ({
      ...prev,
      [region]: !prev[region],
    }));
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-60 border-r flex flex-col">
        <div className="p-4 font-bold text-xl">Dashboard</div>

        <nav className="flex-1">
          <div className="py-2">
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
            >
              <Home className="w-5 h-5 mr-3" />
              Home
            </a>

            <div>
              <button
                onClick={() => toggleExpand("regions")}
                className="w-full flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-100"
              >
                <div className="flex items-center">
                  <Camera className="w-5 h-5 mr-3" />
                  Regions
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    expandedRegions.regions ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedRegions.regions && (
                <div className="ml-4">
                  <button
                    onClick={() => toggleExpand("region1")}
                    className="w-full flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    <div className="flex items-center">
                      <Camera className="w-5 h-5 mr-3" />
                      Region 1
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedRegions.region1 ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expandedRegions.region1 && (
                    <div className="ml-4">
                      <a
                        href="#"
                        className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                        Camera 1
                      </a>
                      <a
                        href="#"
                        className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 bg-gray-50"
                      >
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                        Camera 2
                      </a>
                      <a
                        href="#"
                        className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        <div className="w-2 h-2 rounded-full bg-red-500 mr-3"></div>
                        Camera 3
                      </a>
                    </div>
                  )}

                  <button
                    onClick={() => toggleExpand("region2")}
                    className="w-full flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    <div className="flex items-center">
                      <Camera className="w-5 h-5 mr-3" />
                      Region 2
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedRegions.region2 ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <button
                    onClick={() => toggleExpand("region3")}
                    className="w-full flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    <div className="flex items-center">
                      <Camera className="w-5 h-5 mr-3" />
                      Region 3
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedRegions.region3 ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <button
                    onClick={() => toggleExpand("region4")}
                    className="w-full flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    <div className="flex items-center">
                      <Camera className="w-5 h-5 mr-3" />
                      Region 4
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedRegions.region4 ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>

        <div className="p-4 border-t">
          <a href="#" className="flex items-center text-sm text-gray-700">
            <Info className="w-5 h-5 mr-2" />
            Help & support
          </a>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between p-4 border-b">
          <div className="w-full max-w-md">
            <Input
              type="text"
              placeholder="Search"
              className="w-full rounded-full"
            />
          </div>
          <div className="flex items-center gap-4">
            <Button className="bg-black text-white rounded-full hover:bg-gray-800">
              Create Event
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="w-5 h-5" />
            </Button>
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%282%29-4n2XEWxgBnVCqtWqiYUimfkNGuJwMn.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">
              Region 1 / Camera 2 - #ID3724
            </h1>
            <div className="flex items-center text-green-500">
              <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
              Connected
            </div>
          </div>

          <h2 className="text-xl font-medium mb-6">Overview</h2>

          <div className="grid grid-cols-4 gap-6 mb-8">
            {/* Today */}
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-black flex items-center justify-center rounded mr-2">
                  <RefreshCw className="w-5 h-5 text-white" />
                </div>
                <span>Today</span>
              </div>
              <div className="text-4xl font-bold mb-2">237</div>
              <Button
                variant="outline"
                className="bg-black text-white hover:bg-gray-800 text-xs py-0 h-7 rounded-sm"
              >
                + Details
              </Button>
            </div>

            {/* Week */}
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-black flex items-center justify-center rounded mr-2">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <span>Week</span>
              </div>
              <div className="text-4xl font-bold mb-2">600</div>
              <Button
                variant="outline"
                className="bg-black text-white hover:bg-gray-800 text-xs py-0 h-7 rounded-sm"
              >
                - Details
              </Button>
            </div>

            {/* Month */}
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-black flex items-center justify-center rounded mr-2">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span>Month</span>
              </div>
              <div className="text-4xl font-bold mb-2">2.3k</div>
              <Button
                variant="outline"
                className="bg-black text-white hover:bg-gray-800 text-xs py-0 h-7 rounded-sm"
              >
                + Details
              </Button>
            </div>

            {/* Yearly */}
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-black flex items-center justify-center rounded mr-2">
                  <LineChart className="w-5 h-5 text-white" />
                </div>
                <span>Yearly</span>
              </div>
              <div className="text-4xl font-bold mb-2">5.7k</div>
              <Button
                variant="outline"
                className="bg-black text-white hover:bg-gray-800 text-xs py-0 h-7 rounded-sm"
              >
                + Details
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Violations overview */}
            <div className="col-span-2 border rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Violations overview</h3>
                <div className="relative">
                  <select className="border rounded px-3 py-1 pr-8 appearance-none bg-white">
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Yearly</option>
                  </select>
                  <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div className="h-64 relative">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
                  <div>32</div>
                  <div>24</div>
                  <div>16</div>
                  <div>8</div>
                  <div>0</div>
                </div>

                {/* Chart */}
                <div className="ml-8 h-full flex items-end justify-between">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-12 bg-gray-300 rounded-sm"
                      style={{ height: "45%" }}
                    ></div>
                    <div className="mt-2 text-xs">Monday</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div
                      className="w-12 bg-gray-300 rounded-sm"
                      style={{ height: "35%" }}
                    ></div>
                    <div className="mt-2 text-xs">Tuesday</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div
                      className="w-12 bg-gray-300 rounded-sm"
                      style={{ height: "55%" }}
                    ></div>
                    <div className="mt-2 text-xs">Wednesday</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div
                      className="w-12 bg-gray-300 rounded-sm"
                      style={{ height: "40%" }}
                    ></div>
                    <div className="mt-2 text-xs">Thursday</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div
                      className="w-12 bg-gray-300 rounded-sm"
                      style={{ height: "60%" }}
                    ></div>
                    <div className="mt-2 text-xs">Friday</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div
                      className="w-12 bg-gray-300 rounded-sm"
                      style={{ height: "65%" }}
                    ></div>
                    <div className="mt-2 text-xs">Saturday</div>
                  </div>
                </div>

                {/* Horizontal grid lines */}
                <div className="absolute left-8 right-0 top-0 h-full pointer-events-none">
                  <div className="border-t border-gray-200 h-1/4"></div>
                  <div className="border-t border-gray-200 h-1/4"></div>
                  <div className="border-t border-gray-200 h-1/4"></div>
                  <div className="border-t border-gray-200 h-1/4"></div>
                </div>
              </div>
            </div>

            {/* Safety Violations Metrics */}
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-4">
                Safety Violations Metrics
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Hard hat</span>
                  <span className="font-medium">43</span>
                </div>
                <div className="border-t"></div>

                <div className="flex justify-between items-center">
                  <span>Hi Vis</span>
                  <span className="font-medium">32</span>
                </div>
                <div className="border-t"></div>

                <div className="flex justify-between items-center">
                  <span>Glasses</span>
                  <span className="font-medium">70</span>
                </div>
                <div className="border-t"></div>

                <div className="flex justify-between items-center">
                  <span>Gloves</span>
                  <span className="font-medium">80</span>
                </div>
                <div className="border-t"></div>

                <div className="flex justify-between items-center">
                  <span>Boots</span>
                  <span className="font-medium">12</span>
                </div>
              </div>
            </div>
          </div>

          {/* Latest Logs */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Latest Logs</h3>
              <div className="w-64">
                <Input type="text" placeholder="Search Logs" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="border rounded-full p-4 flex items-center">
                <div className="w-4 h-4 rounded-full bg-green-500 mr-3"></div>
                <span>
                  #ID3724: Connection Restored at time 12:29:48 - 23/03/24
                </span>
              </div>

              <div className="border rounded-full p-4 flex items-center">
                <div className="w-4 h-4 rounded-full bg-red-500 mr-3"></div>
                <span>
                  #ID3724: Connection Error at time 12:25:14 - 23/03/24
                </span>
              </div>

              <div className="border rounded-full p-4 flex items-center">
                <div className="w-4 h-4 bg-orange-500 mr-3 flex items-center justify-center">
                  <Camera className="w-3 h-3 text-white" />
                </div>
                <span>
                  #ID3724: Violation Detected at time 20:19:29 - 23/03/24
                </span>
              </div>

              <div className="border rounded-full p-4 flex items-center">
                <div className="w-4 h-4 bg-orange-500 mr-3 flex items-center justify-center">
                  <Camera className="w-3 h-3 text-white" />
                </div>
                <span>
                  #ID3724: Violation Detected at time 14:19:29 - 22/03/24
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
