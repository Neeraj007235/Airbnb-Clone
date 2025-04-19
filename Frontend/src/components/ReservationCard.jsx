import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, Minus, Plus } from "lucide-react";
import { axiosInstance } from "../lib/axios";

const GuestCounter = ({ label, desc, type, value, onChange, disabledMinus }) => (
  <div className="flex justify-between items-center">
    <div>
      <div className="capitalize from-neutral-950">{label}</div>
      {desc && (
        <div className="text-xs text-gray-500 leading-tight">{desc}</div>
      )}
      {type === "pets" && (
        <div className="text-xs underline cursor-pointer select-none">Bringing a service animal?</div>
      )}
    </div>
    <div className="flex items-center gap-3">
      <button
        onClick={() => onChange(type, -1)}
        disabled={disabledMinus}
        className={`w-8 h-8 border rounded-full flex items-center justify-center cursor-pointer transition-colors ${disabledMinus ? "text-gray-300 border-gray-300 bg-gray-50" : "hover:bg-gray-100"
          }`}
        type="button"
      >
        <Minus size={16} />
      </button>
      <span>{value}</span>
      <button
        onClick={() => onChange(type, 1)}
        className="w-8 h-8 border rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100"
        type="button"
      >
        <Plus size={16} />
      </button>
    </div>
  </div>
);

const OVERLAY_STYLE =
  "absolute left-0 top-[206px] w-full z-20 flex justify-center";

const DROPDOWN_CARD_STYLE =
  "rounded-2xl shadow-2xl bg-white px-7 py-6 min-w-[340px] max-w-[95vw] border border-gray-200";

const ReservationCard = () => {
  const [pricePerNight, setPricePerNight] = useState(26000);
  const [nights] = useState(3);
  const [guests, setGuests] = useState(() => {
    const saved = localStorage.getItem("guests");
    return saved
      ? JSON.parse(saved)
      : { adults: 1, children: 0, infants: 0, pets: 0 };
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const totalGuests = guests.adults + guests.children;
  const totalAmount = pricePerNight * nights;

  useEffect(() => {
    localStorage.setItem("guests", JSON.stringify(guests));
  }, [guests]);

  useEffect(() => {
    const getPrice = async () => {
      try {
        const res = await axiosInstance.post("/price", { guests });
        setPricePerNight(res.data.pricePerNight);
      } catch (err) {
        console.error("Price fetch error:", err);
      }
    };
  
    getPrice();
  }, [guests]);

  useEffect(() => {
    if (!dropdownOpen) return;
    function handleClickAway(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickAway);
    return () => document.removeEventListener("mousedown", handleClickAway);
  }, [dropdownOpen]);

  const handleGuestChange = (type, increment) => {
    setGuests(prev => {
      const updated = {
        ...prev,
        [type]: Math.max(
          0,
          type === "adults"
            ? Math.max(1, prev[type] + increment)
            : prev[type] + increment
        ),
      };
      return updated;
    });
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 border max-w-md mx-auto mt-6 relative">
      <div className="text-2xl font-semibold mb-3">
        ₹{pricePerNight.toLocaleString()}
        <span className="font-normal text-base"> / night</span>
      </div>

      <div className="border rounded-lg overflow-hidden mb-4 shadow-sm cursor-pointer">
        {/* Date Section */}
        <div className="grid grid-cols-2 text-sm text-gray-800 border-b">
          <div className="p-4 border-r">
            <p className="text-xs font-semibold">CHECK-IN</p>
            <p>6/17/2025</p>
          </div>
          <div className="p-4">
            <p className="text-xs font-semibold">CHECKOUT</p>
            <p>6/20/2025</p>
          </div>
        </div>

        {/* Guests Section */}
        <div
          onClick={() => setDropdownOpen(true)}
          className="p-4 flex justify-between items-center cursor-pointer relative hover:bg-gray-50"
        >
          <div>
            <p className="text-xs font-semibold">GUESTS</p>
            <p className="text-sm">
              {totalGuests} {totalGuests === 1 ? 'guest' : 'guests'}, 
              {guests.infants > 0 && ` ${guests.infants} ${guests.infants === 1 ? 'infant' : 'infants'},`} 
              {guests.pets > 0 && ` ${guests.pets} ${guests.pets === 1 ? 'pet' : 'pets'}`}
              {guests.infants === 0 && guests.pets === 0 && ` no infants, no pets`}
            </p>
          </div>
          {dropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>

      {/* Dropdown Overlay - outside the Guests row */}
      {dropdownOpen && (
        <div className={OVERLAY_STYLE} style={{ pointerEvents: 'auto' }}>
          <div className={DROPDOWN_CARD_STYLE} ref={dropdownRef}>
            <div className="space-y-5">
              <GuestCounter
                label="Adults"
                desc="Age 13+"
                type="adults"
                value={guests.adults}
                onChange={handleGuestChange}
                disabledMinus={guests.adults <= 1}
              />
              <GuestCounter
                label="Children"
                desc="Ages 2–12"
                type="children"
                value={guests.children}
                onChange={handleGuestChange}
                disabledMinus={guests.children <= 0}
              />
              <GuestCounter
                label="Infants"
                desc="Under 2"
                type="infants"
                value={guests.infants}
                onChange={handleGuestChange}
                disabledMinus={guests.infants <= 0}
              />
              <GuestCounter
                label="Pets"
                desc={null}
                type="pets"
                value={guests.pets}
                onChange={handleGuestChange}
                disabledMinus={guests.pets <= 0}
              />
             
              <div className="text-xs text-gray-700 pt-3 pb-10 mt-3">
                If you're bringing more than 2 pets, please let your Host know.
              </div>
            </div>
            <button
              className="absolute bottom-6 right-6 text-base text-black underline font-medium hover:opacity-80 focus:outline-none cursor-pointer"
              onClick={e => {
                e.stopPropagation();
                setDropdownOpen(false);
              }}
              tabIndex={0}
              type="button"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <button className="w-full bg-[#ff385c] text-white font-semibold py-4 rounded-lg hover:opacity-90 transition cursor-pointer">
        Reserve
      </button>
      <p className="text-center text-xs text-gray-500 mt-2">You won't be charged yet</p>
      <div className="text-sm text-gray-800 mt-6 space-y-3">
        <div className="flex justify-between cursor-pointer">
          <span className="underline">₹{pricePerNight.toLocaleString()} x {nights} nights</span>
          <span>₹{(pricePerNight * nights).toLocaleString()}</span>
        </div>
        <div className="flex justify-between cursor-pointer">
          <span className="underline">Airbnb service fee</span>
          <span>₹{Math.floor(totalAmount * 0.141).toLocaleString()}</span>
        </div>
        <div className="border-t pt-4 mt-2 flex justify-between font-semibold">
          <span>Total before taxes</span>
          <span>
            ₹{(totalAmount + Math.floor(totalAmount * 0.141)).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;