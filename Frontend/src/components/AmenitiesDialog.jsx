import React from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import {
  FaTree, FaBath, FaShower, FaSoap, FaFan,
  FaToiletPaper, FaTshirt, FaWifi, FaCar, FaPaw
} from "react-icons/fa";

const amenitiesData = [
  {
    category: "Scenic views",
    items: [
      { label: "Park view", icon: <FaTree /> },
      { label: "Garden view", icon: <FaTree /> },
    ],
  },
  {
    category: "Bathroom",
    items: [
      { label: "Bath", icon: <FaBath /> },
      { label: "Body soap", icon: <FaSoap /> },
      { label: "Shower gel", icon: <FaShower /> },
    ],
  },
  {
    category: "Bedroom and laundry",
    items: [
      { label: "Essentials (Towels, bed sheets...)", icon: <FaToiletPaper /> },
      { label: "Free washer", icon: <FaTshirt /> },
      { label: "Clothes drying rack", icon: <FaFan /> },
    ],
  },
  {
    category: "Internet and office",
    items: [
      { label: "Fast wifi – 115 Mbps", icon: <FaWifi /> },
    ],
  },
  {
    category: "Parking and facilities",
    items: [
      { label: "Free driveway parking", icon: <FaCar /> },
      { label: "Pets allowed", icon: <FaPaw /> },
    ],
  },
];

const AmenitiesDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
        <Dialog.Panel className="max-w-3xl w-full bg-white rounded-3xl p-8 relative shadow-2xl">
          <div className="flex items-start">
            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-start rounded-full text-gray-500 hover:text-black -mt-2 hover:cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

         
          <Dialog.Title className="mt-2 text-2xl font-semibold mb-6">What this place offers</Dialog.Title>

          {/* Amenities by Category */}
          <div className="space-y-6">
            {amenitiesData.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold mb-4">{section.category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-xl text-gray-700">{item.icon}</span>
                      <span className="text-gray-800 text-base">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default AmenitiesDialog;
