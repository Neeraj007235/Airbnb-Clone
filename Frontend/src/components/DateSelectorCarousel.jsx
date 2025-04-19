import React, { useRef, useState, useEffect } from "react";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";

const DateSelectorCarousel = () => {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const months = [
        { name: "June 2025", days: 30 },
        { name: "July 2025", days: 31 },
        { name: "August 2025", days: 31 },
        { name: "September 2025", days: 30 },
    ];

    const updateScrollButtons = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    };

    useEffect(() => {
        updateScrollButtons();
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        scrollContainer.addEventListener("scroll", updateScrollButtons);
        return () => scrollContainer.removeEventListener("scroll", updateScrollButtons);
    }, []);

    const scroll = (direction) => {
        if (!scrollRef.current) return;
        const scrollAmount = 360; 

        scrollRef.current.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });

        
        setTimeout(updateScrollButtons, 400);
    };

    return (
        <div className="text-gray-800 text-base mb-9 border-t border-gray-200 pt-6 relative w-full px-4 sm:px-0">
            
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-[18px] sm:text-[20px] font-medium">3 nights in Jalandhar</h2>
                    <p className="text-sm text-neutral-600">17 Jun 2025 – 20 Jun 2025</p>
                </div>
            </div>

            {/* Carousel with scroll buttons */}
            <div className="relative mt-6">
                {canScrollLeft && (
                    <button
                        onClick={() => scroll(-1)}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow p-1 rounded-full z-10 hover:cursor-pointer"
                    >
                        <ChevronLeft size={20} />
                    </button>
                )}
                {canScrollRight && (
                    <button
                        onClick={() => scroll(1)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow p-1 rounded-full z-10 hover:cursor-pointer"
                    >
                        <ChevronRight size={20} />
                    </button>
                )}


            </div>
            {/* Scrollable months */}
            <div
                ref={scrollRef}
                className="overflow-x-auto no-scrollbar scroll-smooth"
            >
                <div className="flex space-x-10 pr-4">
                    {months.map((month) => (
                        <div key={month.name} className="min-w-[320px]">
                            <div className="text-center font-medium mb-2">{month.name}</div>
                            <div className="grid grid-cols-7 text-sm text-center gap-y-2">
                                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                                    <div key={day} className="text-neutral-500">{day}</div>
                                ))}
                                {Array.from({ length: month.days }, (_, i) => {
                                    const date = i + 1;
                                    const isSelected = month.name === "June 2025" && date >= 17 && date <= 19;
                                    return (
                                        <div
                                            key={date}
                                            className={`w-9 h-9 flex items-center justify-center rounded-full mx-auto cursor-pointer ${isSelected ? "bg-black text-white" : "hover:bg-neutral-200"
                                                }`}
                                        >
                                            {date}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom: Calendar Icon + Clear Dates */}
            <div className="flex justify-between items-center mt-6 px-1 hover:cursor-pointer">
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <CalendarDays size={18} />
                </div>
                <button className="text-sm underline text-neutral-600 hover:text-black transition hover:cursor-pointer">
                    Clear dates
                </button>
            </div>
        </div>
    );
};

export default DateSelectorCarousel;
