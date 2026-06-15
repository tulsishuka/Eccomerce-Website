import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[160px] sm:h-[220px] md:h-[280px] lg:h-[350px] overflow-hidden mt-20 rounded-lg">
      {/* Background Image */}
      <img
        src="/home.webp"
        alt="Fashion Collection"
        className="w-full h-full object-cover"
      />

      {/* Content - Hidden on mobile */}
      <div className="absolute inset-0 hidden sm:flex items-center justify-end">
        <div className="max-w-[650px] px-8 md:px-12 lg:px-20 text-right">
          <h1 className="text-white font-bold leading-tight text-2xl md:text-3xl lg:text-5xl">
            Smart Shopping
            <br />
            Trusted by Millions
          </h1>

          <button className="mt-4 bg-white text-purple-900 px-6 py-3 md:px-8 rounded-md text-sm md:text-base font-semibold hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;