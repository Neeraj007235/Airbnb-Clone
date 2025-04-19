import React from "react";
import { FaStar, FaTrophy, FaUsers, FaCalendarAlt } from "react-icons/fa";
import AbooutThisSpace from "./AboutThisSpace";
import SleepingArrangements from "./SleepingArrangements";
import PlaceOffers from "./PlaceOffers";
import DateSelectorCarousel from "./DateSelectorCarousel";

const Overview = () => {
    return (
        <section className="mt-6 space-y-6 px-4 md:px-0">
            <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8 md:gap-12 justify-between mx-auto">
                <div className="flex-1 max-w-2xl w-full">
                   
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-1 text-neutral-800">
                        Entire villa in Jalandhar, India
                    </h3>
                    <div className="text-base sm:text-lg text-neutral-600 mb-6">
                        16+ guests · 6 bedrooms · 10 beds · 8 bathrooms
                    </div>

               
                    <div className="flex flex-col sm:flex-row items-start sm:items-center rounded-xl border p-4 sm:p-6 mb-6 w-full gap-4 sm:gap-6 cursor-pointer">
                        {/* Left Laurel Icon text Right laurel icon */}
                        <div className="flex items-center gap-3">
                            <img
                                src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/pdp-shared/components/LaurelItem/ic-system-gf-gold-left-laurel-32-3x.d074c7557225d2a0f3f1289a3dde7a7d.png"
                                alt="left-laurel"
                                className="h-8"
                            />
                            <div className="text-sm sm:text-lg font-semibold leading-5 text-center">
                                Guest <br /> favourite
                            </div>
                            <img
                                src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/pdp-shared/components/LaurelItem/ic-system-gf-gold-right-laurel-32-3x.f972b95c999d29e144d9ef970585906d.png"
                                alt="right-laurel"
                                className="h-8"
                            />
                        </div>

                        {/* Description */}
                        <div className="text-neutral-500 text-sm sm:text-base flex-1">
                            One of the most loved homes on Airbnb, according to guests
                        </div>

                        {/* Rating + Reviews */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                            <div className="flex flex-col items-start sm:items-center">
                                <div className="text-lg sm:text-2xl font-semibold">5.0</div>
                                <div className="flex gap-1 mt-1">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-500 text-sm" />
                                    ))}
                                </div>
                            </div>

                            {/* Divider for desktop */}
                            <div className="hidden sm:block h-10 border-l border-gray-300" />

                            <div className="flex flex-col items-start sm:pl-4">
                                <div className="text-base font-medium">33</div>
                                <div className="text-sm underline text-neutral-500 cursor-pointer">Reviews</div>
                            </div>
                        </div>
                    </div>

                    {/* Host Info */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 gap-4">
                        <img
                            src="https://a0.muscache.com/im/pictures/user/192bbbe0-f320-4bec-8d26-73b182516911.jpg?im_w=240"
                            alt="host"
                            className="w-12 h-12 rounded-full object-cover hover:cursor-pointer"
                        />
                        <div>
                            <div className="font-semibold">Hosted by Mandeep Singh</div>
                            <div className="text-neutral-500 text-sm">Superhost · 2 years hosting</div>
                        </div>
                    </div>

                    <hr className="border-t border-gray-200 my-6" />

                    {/* Features List */}
                    <div className="flex flex-col gap-6 mb-9">
                        <div className="flex items-start gap-4">
                            <FaTrophy className="text-yellow-500 text-xl mt-1" />
                            <div>
                                <div className="font-semibold">Top 1% of homes</div>
                                <div className="text-neutral-500 text-sm sm:text-base">
                                    This home is one of the highest ranked based on ratings, reviews, and reliability.
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaUsers className="text-neutral-700 text-xl mt-1" />
                            <div>
                                <div className="font-semibold">Perfect ratings from families</div>
                                <div className="text-neutral-500 text-sm sm:text-base">
                                    100% of families who stayed here in the past year rated it 5 stars overall.
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaCalendarAlt className="text-neutral-700 text-xl mt-1" />
                            <div>
                                <div className="font-semibold">Free cancellation for 48 hours</div>
                                <div className="text-neutral-500 text-sm sm:text-base">
                                    Get a full refund if you change your mind.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sections */}
                    <AbooutThisSpace />
                    <SleepingArrangements />
                    <PlaceOffers />
                    <DateSelectorCarousel />
                </div>
            </div>
        </section>
    );
};

export default Overview;
