import React from "react";
import PieCharts from "../Common/PieCharts";

interface AttendanceOverviewProps {
  className?: string;
}

export default function AttendanceOverview({ className }: AttendanceOverviewProps) {
  const data = [
    { name: "On Half day", value: 80 },
    { name: "Present", value: 60 },
    { name: "On leave", value: 20 },
  ];
  const COLORS = ["#FF8042", "#00BFA5", "#42A5F5"];
  return (
    <div className={`bg-white p-4 rounded-lg shadow ${className || ""} w-[365px]`}>
      <div className="flex flex-col items-center">
        <PieCharts />
      </div>
    </div>
  );
}
