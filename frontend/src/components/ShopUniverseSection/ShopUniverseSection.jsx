import React from 'react';


const ShopUniverseSection = () => {
  return (
    <div className="w-full bg-[#FAEDF8] py-6 px-4 flex justify-center items-center">
      <div className="w-full max-w-7xl bg-white border border-[#E9CBE5] rounded-xl py-4 px-6 md:px-12 flex flex-col sm:flex-row justify-end items-center gap-6 md:gap-10 shadow-sm">
        
        {/* Item 1: Easy Return */}
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-[#9A2175]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3-3 3 3m-3-3v12"></path>
          </svg>
          <span className="text-[#2D2D2D] font-medium text-sm md:text-base whitespace-nowrap">
            7 Days Easy Return
          </span>
        </div>

        {/* Divider 1 */}
        <div className="hidden sm:block h-6 w-[1px] bg-[#E9CBE5]"></div>

        {/* Item 2: Cash on Delivery */}
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-[#9A2175]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          <span className="text-[#2D2D2D] font-medium text-sm md:text-base whitespace-nowrap">
            Cash on Delivery
          </span>
        </div>

        {/* Divider 2 */}
        <div className="hidden sm:block h-6 w-[1px] bg-[#E9CBE5]"></div>

        {/* Item 3: Lowest Prices */}
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-[#9A2175]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2zM9 16H9.01M15 16H15.01M12 12H12.01"></path>
          </svg>
          <span className="text-[#2D2D2D] font-medium text-sm md:text-base whitespace-nowrap">
            Lowest Prices
          </span>
        </div>

      </div>
    </div>
  );
};

export default ShopUniverseSection;