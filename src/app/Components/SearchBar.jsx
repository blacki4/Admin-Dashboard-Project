import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon
          className={`transition-colors duration-300 ${
            isFocused ? "text-indigo-500" : "text-gray-400"
          }`}
        />
      </div>
      <input
        className="bg-gray-50 text-gray-800 font-medium ring-1 ring-gray-200 focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none duration-300 placeholder:text-gray-500 rounded-xl pl-10 pr-4 py-3 shadow-sm focus:shadow-md w-full transition-all"
        autoComplete="off"
        placeholder="Search here..."
        name="text"
        type="text"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default SearchBar;
