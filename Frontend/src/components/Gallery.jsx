import React from "react";
import { galleryImages } from "../assets/images";

const Gallery = () => (
  <>
    {/* Desktop Grid Gallery */}
    <div className="relative grid grid-cols-4 grid-rows-2 gap-2 aspect-[2/0.8] rounded-2xl overflow-hidden hover:cursor-pointer">
   
      <div className="col-span-2 row-span-2 relative ">
        <img
          src={galleryImages[0]}
          className="w-full h-full object-cover rounded-l-2xl transition-transform transform hover:scale-105"
          alt="Main gallery image"
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity rounded-l-2xl" />
      </div>
     
      <div className="relative">
        <img
          src={galleryImages[1]}
          className="object-cover w-full h-full transition-transform transform hover:scale-105"
          alt=""
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity" />
      </div>
   
      <div className="relative">
        <img
          src={galleryImages[2]}
          className="object-cover w-full h-full rounded-tr-2xl transition-transform transform hover:scale-105"
          alt=""
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity rounded-tr-2xl" />
      </div>
      
      <div className="relative">
        <img
          src={galleryImages[3]}
          className="object-cover w-full h-full transition-transform transform hover:scale-105"
          alt=""
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity" />
      </div>
  
      <div className="relative">
        <img
          src={galleryImages[4]}
          className="object-cover w-full h-full rounded-br-2xl transition-transform transform hover:scale-105"
          alt=""
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity rounded-br-2xl" />
        <button className="absolute bottom-3 right-3 flex items-center gap-2 px-4 py-2 bg-white border shadow-md rounded-lg text-sm font-medium z-10 hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="text-gray-700"
          >
            <circle cx="4" cy="4" r="2" />
            <circle cx="12" cy="4" r="2" />
            <circle cx="20" cy="4" r="2" />
            <circle cx="4" cy="12" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="20" cy="12" r="2" />
            <circle cx="4" cy="20" r="2" />
            <circle cx="12" cy="20" r="2" />
            <circle cx="20" cy="20" r="2" />
          </svg>
          <span>Show all photos</span>
        </button>

      </div>
    </div>

    {/* Mobile Stacked Gallery */}
    <div className="grid grid-cols-1 md:hidden gap-2 mt-4 hover:cursor-pointer">
      {galleryImages.map((img, i) => (
        <div key={i} className="relative">
          <img
            src={img}
            className="object-cover w-full h-52 rounded-xl transition-transform transform hover:scale-105"
            alt={`Gallery image ${i + 1}`}
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity rounded-xl" />
        </div>
      ))}
    </div>
  </>
);

export default Gallery;
