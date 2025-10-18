"use client";

import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "./SearchBar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState, useRef, useEffect } from "react";
import { useSidebar } from "./SideContext";

export default function Header() {
  const { toggleMenu } = useSidebar();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex bg-white h-[90px] justify-between items-center w-full px-6 shadow-sm border-b">
      <button
        className="p-3 bg-indigo-600 hover:bg-indigo-700 duration-300 rounded-lg xl:hidden cursor-pointer"
        onClick={toggleMenu}
      >
        <MenuIcon />
      </button>
      <h1 className="text-black text-3xl font-bold max-xl:hidden">Dashboard</h1>

      <div className="flex-1 max-w-2xl mx-8">
        <SearchBar />
      </div>

      <div
        className="flex gap-4 justify-center items-center relative"
        ref={dropdownRef}
      >
        <img
          className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
          src="/Images/Portrait of a confident young smart looking man _ Premium AI-generated image.jpeg"
          alt="Profile"
        />
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-black text-lg font-semibold">Malek</h2>
          <p className="text-indigo-600 text-sm">Admin</p>
        </div>
        <div
          className="cursor-pointer transition-transform duration-200 hover:bg-gray-100 rounded-full p-1"
          onClick={toggleDropdown}
        >
          <KeyboardArrowDownIcon
            sx={{ color: "black" }}
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {isOpen && (
          <div className="absolute top-14 right-0 bg-white shadow-lg rounded-xl p-2 w-48 z-50 border animate-in fade-in slide-in-from-top-2 duration-200">
            <button className="block w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg text-gray-700 transition-colors duration-200">
              Settings
            </button>
            <button className="block w-full text-left px-4 py-3 hover:bg-red-50 rounded-lg text-red-600 transition-colors duration-200">
              Log out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
