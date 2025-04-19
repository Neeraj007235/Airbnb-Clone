import React from "react";
import { Heart, Share2 } from "react-feather";

const ListingInfo = () => (
  <div className="mb-4 px-2 md:px-0 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
    <div>
      <h1 className="text-2xl md:text-3xl font-semibold text-[#222]">
        Villa La Vida Jalandhar - Luxe FarmStay with Pool
      </h1>
    </div>

    <div className="flex items-center gap-4">
      <button className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:cursor-pointer hover:underline hover:bg-gray-100 px-2 py-1 rounded">
        <Share2 size={16} />
        <span className="hidden sm:inline">Share</span>
      </button>
      <button className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:cursor-pointer hover:underline hover:bg-gray-100 px-2 py-1 rounded">
        <Heart size={16} />
        <span className="hidden sm:inline">Save</span>
      </button>
    </div>
  </div>
);

export default ListingInfo;