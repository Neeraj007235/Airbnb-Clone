import React, { useState } from "react";
import {
  FaWifi, FaUtensils, FaCar, FaPaw, FaTv, FaSwimmingPool, FaTree
} from "react-icons/fa";
import { MdOutlineSmokeFree, MdOutlineCloudOff } from "react-icons/md";
import AmenitiesDialog from "./AmenitiesDialog";

const amenities = [
  { label: "Park view", icon: <FaTree />, available: true },
  { label: "Garden view", icon: <FaTree />, available: true },
  { label: "Kitchen", icon: <FaUtensils />, available: true },
  { label: "Fast wifi – 115 Mbps", icon: <FaWifi />, available: true },
  { label: "Free driveway parking – 20 spaces", icon: <FaCar />, available: true },
  { label: "Private outdoor pool – all year", icon: <FaSwimmingPool />, available: true },
  { label: "Pets allowed", icon: <FaPaw />, available: true },
  { label: "65-inch HDTV with Prime", icon: <FaTv />, available: true },
  { label: "Carbon monoxide alarm", icon: <MdOutlineCloudOff />, available: false },
  { label: "Smoke alarm", icon: <MdOutlineSmokeFree />, available: false },
];

const PlaceOffers = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-gray-800 text-base mb-9 border-t border-gray-200 pt-6 relative">
      <h2 className="text-2xl font-semibold mb-4">What this place offers</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-4">
        {amenities.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span className={`text-xl ${!item.available ? "opacity-50 line-through" : ""}`}>
              {item.icon}
            </span>
            <span className={`text-base ${!item.available ? "text-gray-400 line-through" : "text-gray-800"}`}>
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={() => setOpen(true)}
        className="border rounded-lg px-6 py-3 text-sm font-semibold hover:bg-gray-100 transition duration-200 hover:cursor-pointer"
      >
        Show all 68 amenities
      </button>
      <AmenitiesDialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default PlaceOffers;
