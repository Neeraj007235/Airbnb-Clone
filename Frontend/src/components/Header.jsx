import React from "react";
import { Globe } from "react-feather";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200 h-20 shadow-sm w-full">
      <div className="relative max-w-6xl mx-auto flex items-center justify-between h-full px-4 md:px-8">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 min-w-[90px] z-10 hover:cursor-pointer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111320.png"
            alt="Airbnb Logo"
            className="h-8 w-8"
          />
          <span className="hidden md:block text-2xl font-bold text-[#ff385c] ml-1 tracking-tight">
            airbnb
          </span>
        </div>

        {/* Center: Search Bar - Mobile */}
        <div className="md:hidden flex items-center justify-center border shadow-sm border-gray-200 rounded-full py-2 px-3 bg-white hover:shadow-md transition hover:cursor-pointer">
          <svg viewBox="0 0 32 32" width={18} height={18} fill="none">
            <circle cx="14" cy="14" r="8" stroke="#ff385c" strokeWidth="2" />
            <path d="M27 27l-6-6" stroke="#ff385c" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Center: Search Bar - Desktop */}
        <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 border shadow-sm border-gray-200 rounded-full py-2 px-4 min-w-[370px] bg-white hover:shadow-md transition hover:cursor-pointer">
          <span className="px-3 text-sm font-semibold text-black">Anywhere</span>
          <span className="text-gray-300 px-1">|</span>
          <span className="px-3 text-sm font-semibold text-black">Any week</span>
          <span className="text-gray-300 px-1">|</span>
          <span className="px-3 text-sm text-gray-500">Add guests</span>
          <button className="bg-[#ff385c] p-2 rounded-full ml-2 hover:cursor-pointer">
            <svg viewBox="0 0 32 32" width={18} height={18} fill="none">
              <circle cx="14" cy="14" r="8" stroke="white" strokeWidth="2" />
              <path d="M27 27l-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Right: User menu */}
        <div className="flex items-center gap-3 z-10 hover:cursor-pointer">
          <button className="rounded-full px-4 py-2 font-semibold text-gray-700 hover:bg-gray-50 hidden md:block hover:cursor-pointer">
            Airbnb your home
          </button>
          <Globe className="text-gray-600 hover:bg-gray-200 p-1 rounded-full hidden md:block" />
          <button className="flex items-center border rounded-full px-3 py-2 gap-2 hover:shadow-md ml-2 hover:cursor-pointer">
            <svg height="18" width="18" viewBox="0 0 32 32" fill="none">
              <rect x="2" y="8" width="28" height="2.5" rx="1.25" fill="#222" />
              <rect x="2" y="21.5" width="28" height="2.5" rx="1.25" fill="#222" />
            </svg>
            <span className="inline-block bg-gray-400 rounded-full w-7 h-7 overflow-hidden border border-gray-200">
              <img src="/user.png" alt="User avatar" className="object-cover w-full h-full" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;