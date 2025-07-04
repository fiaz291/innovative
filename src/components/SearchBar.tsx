"use client";


import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  return (
      <div className="relative w-full">
        <div className="relative bg-white rounded-full shadow-lg border border-gray-200 overflow-hidden">
          <input
            type="text"
            placeholder="Open Jobs"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full px-6 py-4 pr-14 text-gray-800 placeholder-gray-500 bg-transparent border-none outline-none focus:ring-0 text-base font-medium"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-900 hover:bg-gray-800 rounded-full p-2.5 transition-colors duration-200">
            <Search className="w-5 h-5 text-white" />
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-2 px-2">eg Finance Marketing Hr</p>
      </div>
  );
}