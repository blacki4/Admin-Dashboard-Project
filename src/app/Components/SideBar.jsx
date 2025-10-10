"use client";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import PersonIcon from "@mui/icons-material/Person";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import TimelineIcon from "@mui/icons-material/Timeline";
import MapIcon from "@mui/icons-material/Map";
import Link from "next/link";

export default function SideBar() {
  const sections = [
    { title: "Dashboard", icon: DashboardIcon, href: "/" },
    { title: "Manage Team", icon: PeopleIcon, href: "/manage-team" },
    {
      title: "Users Information",
      icon: PermContactCalendarIcon,
      href: "/users-info",
    },
    { title: "Add User", icon: PersonIcon, href: "/add-user" },
    { title: "FAQ Page", icon: HelpOutlineIcon, href: "/faq" },
    { title: "Bar Chart", icon: BarChartIcon, href: "/bar-chart" },
    { title: "Pie Chart", icon: PieChartIcon, href: "/pie-chart" },
    { title: "Line Chart", icon: TimelineIcon, href: "/line-chart" },
    { title: "Map", icon: MapIcon, href: "/map" },
  ];

  const displayTitle = sections.map((sec, index) => {
    const Icon = sec.icon;
    return (
      <Link key={index} href={sec.href}>
        <div className="bg-indigo-800 flex gap-3 rounded-xl p-5 w-[250px] cursor-pointer">
          <Icon />
          <span className="">{sec.title}</span>
        </div>
      </Link>
    );
  });

  return (
    <div className="w-[355px] flex flex-col justify-center items-center gap-5 bg-white h-screen -mt-[90px]">
      <div className="flex gap-2 justify-center items-center mb-2">
        <img
          src="Images\download-removebg-preview.png"
          alt=""
          className="size-13"
        />
        <h1 className="text-black text-4xl mt-0.5">DaM Board</h1>
      </div>
      {displayTitle}
      <div className="w-[250px] h-[150px] bg-indigo-800 flex flex-col justify-center items-center gap-2 rounded-xl mt-7">
        <h1 className="text-white text-xl">Dam Board Pro</h1>
        <p className="text-gray-300 text-sm">Get access to all features</p>
        <button className="py-3 px-5 bg-white text-indigo-800 rounded-lg text-lg cursor-pointer">
          Get Pro
        </button>
      </div>
    </div>
  );
}
