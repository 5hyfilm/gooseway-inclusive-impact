// src/app/organization/ImpactMap.tsx หรือ app/organization/ImpactMap.tsx

"use client";

import {
  MapContainer,
  TileLayer,
  Polyline,
  CircleMarker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
// นำเข้า Type มาจากไฟล์ต้นทาง
import { sampleObstacles } from "@/data/obstacles";
import { sampleRoutes } from "@/data/routes";

// --- เพิ่มส่วนนี้เพื่อให้หายจาก Error Type ---
interface RouteData {
  id: number | string;
  path: [number, number][];
  title: string;
}

interface ObstacleData {
  id: number | string;
  position: [number, number];
  description?: string;
}
// ---------------------------------------

const CENTER_POSITION: [number, number] = [13.7367, 100.5231];

export default function ImpactMap() {
  return (
    <div className="w-full h-[400px] rounded-[32px] overflow-hidden border border-gray-100 shadow-inner relative group">
      <MapContainer
        center={CENTER_POSITION}
        zoom={15}
        scrollWheelZoom={false}
        className="w-full h-full z-10"
      >
        <TileLayer
          attribution="&copy; Stadia Maps"
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        />

        {/* ระบุ Type (route: RouteData) ตรงนี้ */}
        {sampleRoutes.map((route: RouteData) => (
          <Polyline
            key={route.id}
            positions={route.path as L.LatLngExpression[]}
            pathOptions={{
              color: "#2563eb",
              weight: 4,
              opacity: 0.6,
            }}
          >
            <Popup>
              <div className="p-2 font-sans">
                <p className="text-[10px] font-bold text-blue-600 uppercase">
                  Surveyed Route
                </p>
                <p className="font-bold text-gray-900">{route.title}</p>
              </div>
            </Popup>
          </Polyline>
        ))}

        {/* ระบุ Type (obstacle: ObstacleData) ตรงนี้ */}
        {sampleObstacles.map((obstacle: ObstacleData) => (
          <CircleMarker
            key={obstacle.id}
            center={obstacle.position as L.LatLngExpression}
            pathOptions={{
              fillColor: "#f43f5e",
              color: "white",
              weight: 2,
              fillOpacity: 0.8,
            }}
            radius={8}
          >
            <Popup>
              <div className="p-2 font-sans">
                <p className="text-[10px] font-bold text-rose-500 uppercase">
                  Obstacle Detected
                </p>
                <p className="font-bold text-gray-900">
                  {obstacle.description || "พบอุปสรรคในพื้นที่"}
                </p>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>

      {/* ... ส่วน Legend อื่นๆ เหมือนเดิม ... */}
    </div>
  );
}
