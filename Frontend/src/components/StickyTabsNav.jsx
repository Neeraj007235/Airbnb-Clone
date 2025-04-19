import React from "react";

const StickyTabsNav = () => {
  return (
    <div className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200 h-20 shadow-sm w-full flex items-center">
      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full flex justify-between items-center h-full">
        <nav className="flex gap-4 md:gap-6 text-sm font-medium text-gray-800 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <a href="#photos" className="px-2 py-1 font-bold border-b-2 border-gray-400">
            Photos
          </a>
          <a href="#amenities" className="px-2 py-1 hover:border-b-2 border-gray-400">
            Amenities
          </a>
          <a href="#reviews" className="px-2 py-1 hover:border-b-2 border-gray-400">
            Reviews
          </a>
          <a href="#location" className="px-2 py-1 hover:border-b-2 border-gray-400">
            Location
          </a>
        </nav>
      </div>
    </div>
  );
};

export default StickyTabsNav;