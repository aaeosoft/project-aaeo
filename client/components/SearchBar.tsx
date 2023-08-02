// components/SearchBar.js
import React from "react";

const SearchBar = () => {
  return (
    <div className="relative flex items-center gap-4">
      <div className="relative w-64">
        <input
          type="text"
          className="w-64 pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none text-sm"
          placeholder="Search..."
        />
        <button className="absolute right-3 top-2.5 text-gray-500 focus:outline-none">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 15l5.5 5.5M4 11a8 8 0 118 8M1 1l5.5 5.5M22 22l-5.5-5.5"
            ></path>
          </svg>
        </button>
      </div>
      <div className="hover:underline text-white cursor-pointer text-sm">
        Detaylı Arama
      </div>
    </div>
  );
};

export default SearchBar;
