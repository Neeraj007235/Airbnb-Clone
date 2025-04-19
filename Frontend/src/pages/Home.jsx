import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ListingInfo from "../components/ListingInfo";
import Gallery from "../components/Gallery";
import Overview from "../components/Overview";
import ReservationCard from "../components/ReservationCard";
import ReportButton from "../components/ReportButton";
import StickyTabsNav from "../components/StickyTabsNav";

const Home = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {!showSticky && <Header />}
      {showSticky && <StickyTabsNav />}

      <div className="px-4 md:px-8 mt-6 md:mt-8 max-w-6xl mx-auto w-full">
        <ListingInfo />
        <Gallery />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <Overview />
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <ReservationCard />
              <ReportButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;