"use client";

import React from "react";
import dynamic from "next/dynamic";
import {
  ShieldCheck,
  Heart,
  Footprints,
  Target,
  ArrowUpRight,
  Info,
  ExternalLink,
  Map as MapIcon,
} from "lucide-react";

// --- 1. Import Components ---
import ImpactPieCharts from "@/components/organization/ImpactPieCharts";

const ImpactMap = dynamic(() => import("@/components/organization/ImpactMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-50 animate-pulse rounded-[32px] flex items-center justify-center border border-gray-100">
      <p className="text-gray-400 font-bold italic">
        Initializing Impact Map...
      </p>
    </div>
  ),
});

const StatCard = ({ title, value, icon: Icon, color, trend }: any) => (
  <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all">
    <div className="flex justify-between items-start mb-6">
      <div
        className={`p-4 ${color} rounded-2xl text-white shadow-lg shadow-current/20`}
      >
        <Icon className="w-6 h-6" />
      </div>
      {trend && (
        <div className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-black flex items-center gap-1">
          {trend} <ArrowUpRight className="w-3 h-3" />
        </div>
      )}
    </div>
    <h3 className="text-gray-400 text-[10px] font-black uppercase tracking-widest leading-none mb-2">
      {title}
    </h3>
    <p className="text-3xl font-black text-gray-900 tracking-tighter">
      {value}
    </p>
  </div>
);

export default function OrgDashboard() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">
            Impact Overview
          </h2>
          <p className="text-gray-500 font-medium">
            Data-driven accessibility insights for Gooseway.
          </p>
        </div>

        {/* ปรับปรุงปุ่ม Export Report ให้เด่นขึ้น */}
        <button className="bg-blue-600 text-white px-8 py-3.5 rounded-2xl font-black text-sm flex items-center gap-3 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 transition-all active:scale-95 shadow-lg shadow-blue-600/10">
          <ExternalLink className="w-5 h-5" />
          <span>Export Report</span>
        </button>
      </header>

      {/* 4 Main KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="ESG Social Score"
          value="88/100"
          icon={ShieldCheck}
          color="bg-indigo-600"
          trend="+5.2%"
        />
        <StatCard
          title="Volunteer Hours"
          value="2,450"
          icon={Heart}
          color="bg-rose-500"
          trend="+120"
        />
        <StatCard
          title="Distance Audited"
          value="42.5 km"
          icon={Footprints}
          color="bg-emerald-500"
        />
        <StatCard
          title="SDG Target Hit"
          value="78%"
          icon={Target}
          color="bg-blue-600"
        />
      </div>

      {/* --- 2. Main Analysis Section (Map Left, Pie Charts Right) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ฝั่งซ้าย: Impact Map (กินพื้นที่ 2 ใน 3) */}
        <section className="lg:col-span-2 bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm space-y-6 flex flex-col h-[600px] lg:h-auto">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                <MapIcon size={20} />
              </div>
              <h3 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic">
                Analytical Impact Map
              </h3>
            </div>
            <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full uppercase">
              Real-time Data
            </span>
          </div>
          {/* Container สำหรับแผนที่ให้ขยายเต็มพื้นที่ที่เหลือ */}
          <div className="flex-1 w-full rounded-[32px] overflow-hidden">
            <ImpactMap />
          </div>
        </section>

        {/* ฝั่งขวา: Pie Charts (กินพื้นที่ 1 ใน 3) */}
        <div className="lg:col-span-1">
          <ImpactPieCharts />
        </div>
      </div>

      {/* SDG Progress Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-xl font-black text-gray-900">
              SDG Alignment Progress
            </h3>
            <Info className="w-5 h-5 text-gray-300" />
          </div>
          <div className="space-y-10">
            <div>
              <div className="flex justify-between mb-3 items-end">
                <span className="text-sm font-bold text-gray-600 italic">
                  Goal 11: Sustainable Cities & Communities
                </span>
                <span className="text-2xl font-black text-blue-600 italic">
                  82%
                </span>
              </div>
              <div className="h-4 bg-gray-50 rounded-full overflow-hidden p-1 border border-gray-100">
                <div
                  className="h-full bg-blue-600 rounded-full shadow-sm"
                  style={{ width: "82%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-3 items-end">
                <span className="text-sm font-bold text-gray-600 italic">
                  Goal 10: Reduced Inequalities
                </span>
                <span className="text-2xl font-black text-rose-500 italic">
                  64%
                </span>
              </div>
              <div className="h-4 bg-gray-50 rounded-full overflow-hidden p-1 border border-gray-100">
                <div
                  className="h-full bg-rose-500 rounded-full shadow-sm"
                  style={{ width: "64%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-[40px] p-10 text-white flex flex-col justify-between shadow-2xl shadow-blue-900/20">
          <div>
            <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/30">
              <Target className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-2xl font-black mb-4 leading-tight tracking-tight">
              Ready to increase your impact?
            </h3>
            <p className="text-gray-400 font-medium text-sm leading-relaxed">
              นัดหมายทีม Gooseway เข้าไปจัดกิจกรรม Empathy Mapping
              หรือตรวจสอบอาคารสถานที่เพื่อรับตราสัญลักษณ์รับรอง.
            </p>
          </div>
          <button className="mt-10 w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-black transition-all shadow-lg shadow-blue-600/30 active:scale-95">
            Book Assessment
          </button>
        </div>
      </div>
    </div>
  );
}
