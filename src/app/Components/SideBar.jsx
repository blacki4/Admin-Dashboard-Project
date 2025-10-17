"use client";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import TimelineIcon from "@mui/icons-material/Timeline";
import MapIcon from "@mui/icons-material/Map";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname();

  const sections = [
    { title: "Dashboard", icon: DashboardIcon, href: "/" },
    { title: "Manage Team", icon: PeopleIcon, href: "/manage-team" },
    { title: "Add User", icon: PersonIcon, href: "/add-user" },
    { title: "FAQ Page", icon: HelpOutlineIcon, href: "/faq" },
    { title: "Bar Chart", icon: BarChartIcon, href: "/bar-chart" },
    { title: "Pie Chart", icon: PieChartIcon, href: "/pie-chart" },
    { title: "Line Chart", icon: TimelineIcon, href: "/line-chart" },
    { title: "Map", icon: MapIcon, href: "/map" },
  ];

  const displayTitle = sections.map((sec, index) => {
    const Icon = sec.icon;
    const isActive = pathname === sec.href;

    return (
      <Link key={index} href={sec.href}>
        <div
          className={`flex gap-3 rounded-xl p-4 w-[250px] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md ${
            isActive
              ? "bg-indigo-600 text-white shadow-lg"
              : "bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
          }`}
        >
          <Icon className={isActive ? "text-white" : "text-gray-600"} />
          <span className="font-medium">{sec.title}</span>
        </div>
      </Link>
    );
  });

  return (
    <div className="w-80 flex flex-col items-center gap-6 bg-white h-screen py-8 sticky top-0 shadow-lg">
      {/* Logo Section */}
      <div className="flex gap-3 items-center mb-4 px-6">
        <img
          src="/Images/download-removebg-preview.png"
          alt="Logo"
          className="w-12 h-12"
        />
        <h1 className="text-black text-2xl font-bold">DaM Board</h1>
      </div>

      {/* Navigation Menu */}
      <div className="flex flex-col gap-3 w-full px-6">{displayTitle}</div>

      {/* Pro Card */}
      <div className="mt-8 w-[280px] h-[180px] bg-gradient-to-br from-indigo-600 to-purple-600 flex flex-col justify-center items-center gap-3 rounded-2xl p-6 mx-6 shadow-lg animate-pulse">
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
          <span className="text-white text-xl font-bold">★</span>
        </div>
        <h1 className="text-white text-xl font-bold text-center">
          Dam Board Pro
        </h1>
        <p className="text-gray-200 text-sm text-center">
          Get access to all features
        </p>
        <Link href="/get-pro">
          <button className="py-3 px-6 bg-white text-indigo-600 rounded-lg font-semibold cursor-pointer hover:bg-gray-100 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Get Pro
          </button>
        </Link>
      </div>
    </div>
  );
}
