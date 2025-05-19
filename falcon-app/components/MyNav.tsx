"use client";
import { Camera, ChevronDown, Home, Info } from "lucide-react";
import React, { useState } from "react";

function MyNav() {
  const [expandedRegions, setExpandedRegions] = useState({
    regions: true,
    region1: true,
    region2: false,
    region3: false,
    region4: false,
  });

  type Region = "regions" | "region1" | "region2" | "region3" | "region4";
  const toggleExpand = (region: Region) => {
    setExpandedRegions((prev) => ({
      ...prev,
      [region]: !prev[region],
    }));
  };

  return (
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
  );
}

export default MyNav;

"use client";
import { Camera, ChevronDown, Home, Info } from "lucide-react";
import React, { useState } from "react";

function MyNav() {
  const [expandedRegions, setExpandedRegions] = useState({
    regions: true,
    region1: true,
    region2: false,
    region3: false,
    region4: false,
  });

  type Region = "regions" | "region1" | "region2" | "region3" | "region4";
  const toggleExpand = (region: Region) => {
    setExpandedRegions((prev) => ({
      ...prev,
      [region]: !prev[region],
    }));
  };

  return (
    <div className="w-60 border-r flex flex-col">
      <div className="p-4 font-bold text-xl">Dashboard</div>
      <nav className="flex-1">
        <div className="py-2">
          <a
            href="home"
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
                      href="camera"
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
  );
}

export default MyNav;
