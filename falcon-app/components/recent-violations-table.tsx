"use client";

import { SetStateAction, useState } from "react";
import {
  AlertTriangle,
  ArrowUpDown,
  Eye,
  HardHat,
  MoreHorizontal,
  Shield,
} from "lucide-react";
import { format } from "date-fns";

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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Sample data for recent violations
const violations = [
  {
    id: "V-1234",
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
    camera: "Camera 3 - North Entrance",
    violationType: "Hard Hat",
    severity: "High",
    status: "Unresolved",
    imageUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "V-1233",
    timestamp: new Date(Date.now() - 1000 * 60 * 45),
    camera: "Camera 1 - Main Floor",
    violationType: "Safety Glasses",
    severity: "Medium",
    status: "Under Review",
    imageUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "V-1232",
    timestamp: new Date(Date.now() - 1000 * 60 * 120),
    camera: "Camera 5 - Loading Bay",
    violationType: "Safety Vest",
    severity: "Low",
    status: "Resolved",
    imageUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "V-1231",
    timestamp: new Date(Date.now() - 1000 * 60 * 180),
    camera: "Camera 2 - Assembly Line",
    violationType: "Hard Hat",
    severity: "High",
    status: "Unresolved",
    imageUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "V-1230",
    timestamp: new Date(Date.now() - 1000 * 60 * 240),
    camera: "Camera 7 - Warehouse",
    violationType: "Safety Glasses",
    severity: "Medium",
    status: "Resolved",
    imageUrl: "/placeholder.svg?height=40&width=40",
  },
];

export function RecentViolationsTable() {
  const [sortColumn, setSortColumn] = useState("timestamp");
  const [sortDirection, setSortDirection] = useState("desc");

  const handleSort = (column: SetStateAction<string>) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("desc");
    }
  };

  const sortedViolations = [...violations].sort((a, b) => {
    const aValue = a[sortColumn as keyof typeof a];
    const bValue = b[sortColumn as keyof typeof b];

    if (aValue instanceof Date && bValue instanceof Date) {
      return sortDirection === "asc"
        ? aValue.getTime() - bValue.getTime()
        : bValue.getTime() - aValue.getTime();
    }

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortDirection === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    return 0;
  });

  const getViolationIcon = (type: string) => {
    switch (type) {
      case "Hard Hat":
        return <HardHat className="h-4 w-4 text-orange-500" />;
      case "Safety Glasses":
        return <Eye className="h-4 w-4 text-blue-500" />;
      case "Safety Vest":
        return <Shield className="h-4 w-4 text-green-500" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-destructive" />;
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "High":
        return <Badge variant="destructive">High</Badge>;
      case "Medium":
        return (
          <Badge variant="default" className="bg-orange-500">
            Medium
          </Badge>
        );
      case "Low":
        return <Badge variant="outline">Low</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Unresolved":
        return <Badge variant="destructive">Unresolved</Badge>;
      case "Under Review":
        return (
          <Badge variant="default" className="bg-yellow-500">
            Under Review
          </Badge>
        );
      case "Resolved":
        return (
          <Badge variant="outline" className="border-green-500 text-green-500">
            Resolved
          </Badge>
        );
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>
            <Button
              variant="ghost"
              onClick={() => handleSort("timestamp")}
              className="flex items-center p-0 h-auto font-medium"
            >
              Time
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          </TableHead>
          <TableHead>Camera</TableHead>
          <TableHead>Violation Type</TableHead>
          <TableHead>Severity</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Image</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedViolations.map((violation) => (
          <TableRow key={violation.id}>
            <TableCell className="font-medium">{violation.id}</TableCell>
            <TableCell>{format(violation.timestamp, "h:mm a")}</TableCell>
            <TableCell>{violation.camera}</TableCell>
            <TableCell>
              <div className="flex items-center">
                {getViolationIcon(violation.violationType)}
                <span className="ml-2">{violation.violationType}</span>
              </div>
            </TableCell>
            <TableCell>{getSeverityBadge(violation.severity)}</TableCell>
            <TableCell>{getStatusBadge(violation.status)}</TableCell>
            <TableCell>
              <Avatar className="h-10 w-10 rounded-sm">
                <AvatarImage src={violation.imageUrl} alt="Violation image" />
                <AvatarFallback className="rounded-sm">IMG</AvatarFallback>
              </Avatar>
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
                  <DropdownMenuItem>View details</DropdownMenuItem>
                  <DropdownMenuItem>Mark as resolved</DropdownMenuItem>
                  <DropdownMenuItem>Assign to team</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
