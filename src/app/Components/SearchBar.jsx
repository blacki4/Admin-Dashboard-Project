import React from "react";

const SearchBar = () => {
  return (
    <div>
      <input
        className="bg-zinc-100 text-zinc-600 font-mono ring-1 ring-zinc-300 focus:ring-2 focus:ring-indigo-500 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg focus:shadow-indigo-500 w-[400px]"
        autoComplete="off"
        placeholder="Search here..."
        name="text"
        type="text"
      />
    </div>
  );
};

export default SearchBar;
