import React from "react";
import {
  LayoutDashboard,
  Users,
  MapPin,
  FileText,
  LogOut,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // นำเข้า Image component

export default function OrganizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      href: "/organization/dashboard",
    },
    { icon: Users, label: "Volunteers", href: "/organization/volunteers" },
    { icon: MapPin, label: "Impact Areas", href: "/organization/issues" },
    { icon: FileText, label: "ESG Reports", href: "/organization/reports" },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-200 hidden lg:flex flex-col fixed h-full z-20">
        <div className="p-8">
          <Link
            href="/organization/dashboard"
            className="flex items-center gap-3"
          >
            {/* แก้ไขส่วนโลโก้ Gooseway */}
            <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-lg shadow-blue-200">
              <Image
                src="/gooseway-logo.jpg" // ใส่ path รูปของคุณ
                alt="Gooseway Logo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="font-bold text-slate-900 leading-tight">
                Gooseway
              </h1>
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                Inclusive Impact
              </p>
            </div>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between p-3.5 rounded-2xl text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-all group"
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-sm">{item.label}</span>
              </div>
              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-100">
          <div className="bg-slate-50 p-4 rounded-2xl mb-4">
            <p className="text-xs font-bold text-slate-400 uppercase mb-2">
              Signed in as
            </p>
            {/* แก้ไขส่วนโลโก้ Chula */}
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/chula-logo.png" // ใส่ path รูปของคุณ
                  alt="Chulalongkorn University Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-bold text-slate-900 leading-tight">
                Chulalongkorn University
              </p>
            </div>
          </div>
          <button className="flex items-center gap-3 p-3 w-full text-slate-400 hover:text-rose-500 transition-colors font-bold text-sm">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 lg:ml-72 min-h-screen">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
