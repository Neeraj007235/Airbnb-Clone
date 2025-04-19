import React, { useState, useRef, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import { FaGoogle, FaApple } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const countries = [
  { code: "+91", name: "India" },
  { code: "+1", name: "United States" },
  { code: "+44", name: "United Kingdom" },
  { code: "+61", name: "Australia" },
  { code: "+81", name: "Japan" },
  { code: "+49", name: "Germany" },
  { code: "+33", name: "France" },
  { code: "+39", name: "Italy" },
  { code: "+34", name: "Spain" },
  { code: "+55", name: "Brazil" },
  { code: "+86", name: "China" },
];

const ReportDialog = ({ isOpen, setIsOpen }) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [phone, setPhone] = useState("");
  const dropdownRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/40" />
      <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
      <Dialog.Panel className="w-full max-w-xl bg-white rounded-3xl p-8 relative shadow-2xl">


        
          <button onClick={() => setIsOpen(false)} className="absolute top-4 left-4 text-gray-500 hover:text-black hover:cursor-pointer">
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <Dialog.Title className="text-center text-sm font-bold">Log in or sign up</Dialog.Title>
          <hr className="my-3" />
          <p className="justify-start text-xl font-bold mb-6">Welcome to Airbnb</p>

          <div className="space-y-4">

            {/* Combined Box for Country + Phone */}
            <div className="border rounded-lg overflow-hidden text-sm text-gray-800 relative" ref={dropdownRef}>
         
              <div className="p-3 border-b">
                <p className="text-xs text-gray-600 mb-1">Country/Region</p>
                <div
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <span>{selectedCountry.name} ({selectedCountry.code})</span>
                  <IoIosArrowDown className={`text-lg text-gray-500 transition-transform ${showDropdown ? "rotate-180" : ""}`} />
                </div>
                {showDropdown && (
                  <div className="absolute left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg z-10 mt-1 max-h-60 overflow-y-auto ">
                    {countries.map((country, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setSelectedCountry(country);
                          setShowDropdown(false);
                        }}
                        className={`px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm ${selectedCountry.code === country.code ? "bg-gray-100" : ""}`}
                      >
                        {country.name} ({country.code})
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Phone Number Row */}
              <div className="p-3">
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full outline-none"
                />
              </div>
            </div>

          
            <p className="text-xs text-gray-500">
              We'll call or text you to confirm your number. Standard message and data rates apply.{" "}
              <span className="underline">Privacy Policy</span>
            </p>

            
            <button className="w-full bg-[#ff385c] text-white rounded-lg py-3 font-medium">Continue</button>

            {/* Divider */}
            <div className="border-t my-4" />

            {/* OAuth Buttons */}
            <button className="w-full border py-2 rounded-lg font-medium hover:bg-gray-50 flex items-center justify-center gap-2">
              <FaGoogle className="text-red-500" />
              Continue with Google
            </button>
            <button className="w-full border py-2 rounded-lg font-medium hover:bg-gray-50 flex items-center justify-center gap-2">
              <FaApple />
              Continue with Apple
            </button>
            <button className="w-full border py-2 rounded-lg font-medium hover:bg-gray-50 flex items-center justify-center gap-2">
              <MdEmail />
              Continue with email
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ReportDialog;