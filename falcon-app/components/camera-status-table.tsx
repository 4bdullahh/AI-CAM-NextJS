"use client";

import { useState } from "react";
import { Camera, CheckCircle, MoreHorizontal, XCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Define a type for each camera object
type CameraInfo = {
  id: string;
  name: string;
  location: string;
  status: "Online" | "Offline";
  lastActive: string;
  violations: number;
  uptime: number;
};

// Sample data for camera status
// get from API call
const cameras: CameraInfo[] = [
  {
    id: "CAM-001",
    name: "Camera 1 - Main Floor",
    location: "Building A - Main Floor",
    status: "Online",
    lastActive: "2 minutes ago",
    violations: 24,
    uptime: 99.8,
  },
  {
    id: "CAM-002",
    name: "Camera 2 - Assembly Line",
    location: "Building A - Assembly Area",
    status: "Online",
    lastActive: "Just now",
    violations: 37,
    uptime: 98.5,
  },
  {
    id: "CAM-003",
    name: "Camera 3 - North Entrance",
    location: "Building A - North Entrance",
    status: "Online",
    lastActive: "5 minutes ago",
    violations: 18,
    uptime: 97.2,
  },
  {
    id: "CAM-004",
    name: "Camera 4 - South Wing",
    location: "Building B - South Wing",
    status: "Offline",
    lastActive: "2 hours ago",
    violations: 12,
    uptime: 85.3,
  },
  {
    id: "CAM-005",
    name: "Camera 5 - Loading Bay",
    location: "Building B - Loading Bay",
    status: "Online",
    lastActive: "1 minute ago",
    violations: 31,
    uptime: 99.1,
  },
];

export function CameraStatusTable() {
  const [sortColumn, setSortColumn] = useState<keyof CameraInfo>("id");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (column: keyof CameraInfo): void => {
    if (sortColumn === column) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedCameras = [...cameras].sort((a, b) => {
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];

    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
    }

    return sortDirection === "asc"
      ? String(aValue).localeCompare(String(bValue))
      : String(bValue).localeCompare(String(aValue));
  });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]" onClick={() => handleSort("id")}>
            ID
          </TableHead>
          <TableHead onClick={() => handleSort("name")}>Camera</TableHead>
          <TableHead onClick={() => handleSort("location")}>Location</TableHead>
          <TableHead onClick={() => handleSort("status")}>Status</TableHead>
          <TableHead onClick={() => handleSort("lastActive")}>
            Last Active
          </TableHead>
          <TableHead onClick={() => handleSort("violations")}>
            Violations
          </TableHead>
          <TableHead onClick={() => handleSort("uptime")}>Uptime</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedCameras.map((camera) => (
          <TableRow key={camera.id}>
            <TableCell className="font-medium">{camera.id}</TableCell>
            <TableCell>
              <div className="flex items-center">
                <Camera className="h-4 w-4 mr-2 text-primary" />
                {camera.name}
              </div>
            </TableCell>
            <TableCell>{camera.location}</TableCell>
            <TableCell>
              {camera.status === "Online" ? (
                <Badge className="bg-green-500">
                  <CheckCircle className="h-3 w-3 mr-1" /> Online
                </Badge>
              ) : (
                <Badge variant="destructive">
                  <XCircle className="h-3 w-3 mr-1" /> Offline
                </Badge>
              )}
            </TableCell>
            <TableCell>{camera.lastActive}</TableCell>
            <TableCell>{camera.violations}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Progress
                  value={camera.uptime}
                  className="h-2"
                  progress-indicator={
                    camera.uptime > 95 ? "bg-green-500" : "bg-orange-500"
                  }
                />
                <span className="text-xs">{camera.uptime}%</span>
              </div>
            </TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View feed</DropdownMenuItem>
                  <DropdownMenuItem>View violations</DropdownMenuItem>
                  <DropdownMenuItem>Camera settings</DropdownMenuItem>
                  {camera.status === "Offline" && (
                    <DropdownMenuItem>Restart camera</DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
