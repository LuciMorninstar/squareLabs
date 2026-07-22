"use client";

import { assetSrc } from "@/lib/assets";


import first from "@/assets/whoWeAre/first.jpg"
import second from "@/assets/whoWeAre/second.jpg"
import third from "@/assets/whoWeAre/third.jpg"


const GlimpseGallery = () => {
  return (
    <div className="grid grid-cols-2 gap-3 w-full max-w-xl mx-auto p-2 rounded-3xl">
      {/* Top left */}
      <div className="group rounded-2xl overflow-hidden aspect-square">
        <img
          src={assetSrc(first)}
          alt="Working in office"
          className="w-full h-full object-cover block group-hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>

      {/* Top right */}
      <div className="group rounded-2xl overflow-hidden aspect-square">
        <img
          src={assetSrc(second)}
          alt="Team collaborating"
          className="w-full h-full object-cover block group-hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>

      {/* Bottom - spans both columns */}
      <div className="group col-span-2 rounded-2xl overflow-hidden aspect-[16/9]">
        <img
          src={assetSrc(third)}
          alt="Team walking together"
          className="w-full h-full object-cover block group-hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default GlimpseGallery;
