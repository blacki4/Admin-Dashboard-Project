"use client";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import PersonIcon from "@mui/icons-material/Person";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import TimelineIcon from "@mui/icons-material/Timeline";
import MapIcon from "@mui/icons-material/Map";

export default function SideBar() {
  const sections = [
    { title: "Dashboard", icon: DashboardIcon },
    { title: "Manage Team", icon: PeopleIcon },
    { title: "Users Information", icon: PermContactCalendarIcon },
    { title: "Add User", icon: PersonIcon },
    { title: "FAQ Page", icon: HelpOutlineIcon },
    { title: "Bar Chart", icon: BarChartIcon },
    { title: "Pie Chart", icon: PieChartIcon },
    { title: "Line Chart", icon: TimelineIcon },
    { title: "Map", icon: MapIcon },
  ];

  const displayTitle = sections.map((sec, index) => {
    const Icon = sec.icon;
    return (
      <div
        key={index}
        className="bg-indigo-800 flex gap-3 rounded-xl p-5 w-[250px] cursor-pointer"
      >
        <Icon />
        <span className="">{sec.title}</span>
      </div>
    );
  });

  return (
    <div className="flex">
      <div className="flex flex-col justify-center items-center w-1/6 gap-5 bg-white h-screen">
        <h1 className="text-indigo-800 text-2xl">DaM Board</h1>
        {displayTitle}
        <div className="w-[250px] h-[150px] bg-indigo-800 flex flex-col justify-center items-center gap-2 rounded-xl mt-7">
          <h1 className="text-white text-xl">Dam Board Pro</h1>
          <p className="text-gray-300 text-sm">Get access to all features</p>
          <button className="py-3 px-5 bg-white text-indigo-800 rounded-lg text-lg cursor-pointer">
            Get Pro
          </button>
        </div>
      </div>

      <div className="flex bg-white h-[90px] justify-between w-screen items-center">
        <h1 className="text-black text-3xl ml-10">Dashboard</h1>
        <div className="flex gap-2 justify-center items-center mr-10">
          <img
            className="size-17 rounded-full"
            src="\Images\Portrait of a confident young smart looking man _ Premium AI-generated image.jpeg"
            alt=""
          />
          <div>
            <h2 className="text-black">Malek</h2>
            <p className="text-indigo-800">Admin</p>
          </div>
          <div>
            <KeyboardArrowDownIcon sx={{ color: "Black" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
