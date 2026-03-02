"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

// --- 1. ข้อมูลจำลองสำหรับประเภทอุปสรรค ---
const obstacleData = [
  { name: "Ramps", value: 40, color: "#2563eb" }, // Blue
  { name: "Pavement", value: 30, color: "#7c3aed" }, // Purple
  { name: "Obstructions", value: 20, color: "#f59e0b" }, // Amber
  { name: "Others", value: 10, color: "#94a3b8" }, // Slate
];

// --- 2. ข้อมูลจำลองสำหรับสถานะการแก้ไข ---
const resolutionData = [
  { name: "Resolved", value: 60, color: "#10b981" }, // Emerald
  { name: "In Progress", value: 25, color: "#3b82f6" }, // Blue
  { name: "Pending", value: 15, color: "#f43f5e" }, // Rose
];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      className="text-[10px] font-bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

interface ChartCardProps {
  title: string;
  data: any[];
}

const ChartCard = ({ title, data }: ChartCardProps) => (
  <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col items-center w-full">
    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6 text-center">
      {title}
    </h3>
    {/* ปรับความสูงจาก h-60 เป็น h-[300px] เพื่อให้พอดีกับ Legend */}
    <div className="w-full h-[300px] relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="45%" // ขยับจุดศูนย์กลางขึ้นเล็กน้อยเพื่อเผื่อที่ให้ Legend ด้านล่าง
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                className="hover:opacity-80 transition-opacity outline-none"
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              border: "none",
              borderRadius: "12px",
              padding: "12px",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            }}
            itemStyle={{ fontSize: "12px", fontWeight: "bold" }}
          />
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{
              fontSize: "11px",
              paddingTop: "20px",
            }}
            formatter={(value) => (
              <span className="text-gray-600 font-medium">{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default function ImpactPieCharts() {
  return (
    // เปลี่ยนจาก grid-cols-2 เป็น flex-col เพื่อให้เรียงต่อกันในแนวตั้ง
    <div className="flex flex-col gap-8 w-full">
      <ChartCard title="Obstacle Breakdown by Type" data={obstacleData} />
      <ChartCard title="Issue Resolution Status" data={resolutionData} />
    </div>
  );
}
