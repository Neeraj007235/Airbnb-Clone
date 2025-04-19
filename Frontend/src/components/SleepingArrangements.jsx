import React, { useRef, useState, useEffect } from "react";
import { FaBed, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const rooms = [
  { title: "Bedroom 1", beds: ["1 double bed"] },
  { title: "Bedroom 2", beds: ["1 double bed", "1 single bed"] },
  { title: "Bedroom 3", beds: ["1 king bed"] },
  { title: "Bedroom 4", beds: ["2 single beds"] },
  { title: "Bedroom 5", beds: ["1 queen bed"] },
  { title: "Bedroom 6", beds: ["1 sofa bed"] },
];

const SleepingArrangements = () => {
  const scrollRef = useRef();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const container = scrollRef.current;
    if (container) {
      const scrollLeft = container.scrollLeft;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < maxScrollLeft - 1); 
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    checkScroll();
    container.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      container.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });

      
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <div className="text-gray-800 text-base mb-9 border-t border-gray-200 pt-6 relative">
      <h2 className="text-2xl font-semibold mb-4">Where you'll sleep</h2>

      {/* Left Arrow */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border shadow-md rounded-full p-2 z-10 hidden md:flex hover:cursor-pointer"
        >
          <FaChevronLeft />
        </button>
      )}

      {/* Right Arrow */}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border shadow-md rounded-full p-2 z-10 hidden md:flex hover:cursor-pointer"
        >
          <FaChevronRight />
        </button>
      )}

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2 pr-4 no-scrollbar"
      >
        {rooms.map((room, idx) => (
          <div
            key={idx}
            className="border rounded-xl p-5 min-w-[200px] flex flex-col items-start gap-3 shrink-0 bg-white"
          >
            <div className="flex gap-1">
              {room.beds.map((_, i) => (
                <FaBed key={i} className="text-xl text-gray-600" />
              ))}
            </div>
            <div className="font-semibold text-lg">{room.title}</div>
            <div className="text-neutral-500 text-sm">
              {room.beds.join(", ")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SleepingArrangements;
