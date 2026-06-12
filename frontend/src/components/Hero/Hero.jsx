import React from "react";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
    <section className="relative w-full h-screen overflow-hidden ">
      <img
        src="/women2.jpg"
        alt="Fashion Collection"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

   
      <div className="absolute inset-0 bg-black/30"></div>

   
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <span className="text-xs md:text-sm tracking-[0.4em] uppercase text-amber-200 mb-4">
          Summer '24 Collection
        </span>
<h1 className="text-3xl md:text-5xl lg:text-5xl font-serif font-[600] text-white/80 max-w-5xl leading-tight mb-8">
  The Art of Pure Form
</h1>

        <div className="flex gap-4 flex-wrap justify-center">
            <Link to="/CategoryCard">
          <button className="px-8 py-3 border border-white text-white hover:bg-white/10 transition">
            Shop Collection
          </button>
</Link>
          <button className="px-8 py-3 border border-white text-white hover:bg-white/10 transition">
            View Lookbook
          </button>
        </div>
      </div>

      {/* Bottom Left Text */}
      <div className="absolute bottom-8 left-8 z-10">
        <p className="text-xs text-gray-300">
          Captured in the minimalist villas of Puglia, Italy.
        </p>
      </div>
    </section>
  
    </>
  );
};

export default Hero;