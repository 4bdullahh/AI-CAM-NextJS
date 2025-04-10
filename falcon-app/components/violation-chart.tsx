"use client";

import { useEffect, useState } from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Card } from "@/components/ui/card";

// Sample data for the chart
const generateChartData = () => {
  const data = [];
  const now = new Date();

  for (let i = 13; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);

    // Generate random data with some patterns
    const hardHat = Math.floor(Math.random() * 15) + 5;
    const safetyGlasses = Math.floor(Math.random() * 10) + 2;
    const safetyVest = Math.floor(Math.random() * 5) + 1;

    data.push({
      date: date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      hardHat,
      safetyGlasses,
      safetyVest,
      total: hardHat + safetyGlasses + safetyVest,
    });
  }

  return data;
};

export function ViolationChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(generateChartData());
  }, []);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 10, left: 10, bottom: 0 }}
      >
        <XAxis
          dataKey="date"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <Card className="p-2 border shadow-sm bg-background">
                  <div className="text-sm font-bold">
                    {payload[0].payload.date}
                  </div>
                  <div className="text-xs text-orange-500">
                    Hard Hat: {payload[0].payload.hardHat}
                  </div>
                  <div className="text-xs text-blue-500">
                    Safety Glasses: {payload[0].payload.safetyGlasses}
                  </div>
                  <div className="text-xs text-green-500">
                    Safety Vest: {payload[0].payload.safetyVest}
                  </div>
                  <div className="text-xs font-semibold mt-1">
                    Total: {payload[0].payload.total}
                  </div>
                </Card>
              );
            }
            return null;
          }}
        />
        <Line
          type="monotone"
          dataKey="total"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={{ r: 1 }}
          activeDot={{ r: 5 }}
        />
        <Line
          type="monotone"
          dataKey="hardHat"
          stroke="hsl(var(--orange-500, 24 95% 53%))"
          strokeWidth={1.5}
          strokeDasharray="4 4"
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="safetyGlasses"
          stroke="hsl(var(--blue-500, 217 91% 60%))"
          strokeWidth={1.5}
          strokeDasharray="4 4"
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="safetyVest"
          stroke="hsl(var(--green-500, 142 71% 45%))"
          strokeWidth={1.5}
          strokeDasharray="4 4"
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
