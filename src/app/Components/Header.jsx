"use client";

import SearchBar from "./SearchBar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState, useRef, useEffect } from "react";

export default function Header() {
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
    <div className="flex justify-end">
      <div className="flex bg-white h-[90px] justify-between items-center w-5/6">
        <h1 className="text-black text-3xl ml-10">Dashboard</h1>
        <SearchBar />
        <div
          className="flex gap-6 justify-center items-center mr-10 relative"
          ref={dropdownRef}
        >
          <img
            className="size-17 rounded-full"
            src="\Images\Portrait of a confident young smart looking man _ Premium AI-generated image.jpeg"
            alt=""
          />
          <div className="-ml-4 flex flex-col justify-center items-center">
            <h2 className="text-black text-lg">Malek</h2>
            <p className="text-indigo-800">Admin</p>
          </div>
          <div className="cursor-pointer" onClick={toggleDropdown}>
            <KeyboardArrowDownIcon sx={{ color: "Black" }} />
          </div>

          {isOpen && (
            <div className="absolute top-14 right-0 bg-white shadow-lg rounded-xl p-2 w-40 z-50 border">
              <button className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg text-black">
                Settings
              </button>
              <button className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg text-red-600">
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
