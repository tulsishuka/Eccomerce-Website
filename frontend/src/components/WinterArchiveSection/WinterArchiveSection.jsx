// import React from 'react'

// const WinterArchiveSection = () => {
//   return (
//     <div className="w-full bg-[#2C1911] p-6 lg:p-12">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
//         {/* Left Banner Position */}
//         <div className="relative lg:col-span-7 rounded-2xl overflow-hidden">
//           <img
//             src="/gold.webp"
//             alt="Gold Archive"
//             className="w-full h-auto object-cover"
//           />
//           {/* Shifted button closer to the bottom edge */}
//           <div className="absolute bottom-4 left-8 md:bottom-6 md:left-12">
//             <button className="px-8 py-3 bg-transparent border border-[#523326] text-white font-medium rounded-md hover:border-[#EAD09E] transition-colors bg-[#1F100B]/30 backdrop-blur-sm">
//               Shop Now
//             </button>
//           </div>
//         </div>

//         {/* Right 2x2 Grid Position */}
//         <div className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-6 justify-items-center">
//           <div className="w-full max-w-[180px]">
//             <img
//               src="/lehanga.webp"
//               alt="Lehenga Archive"
//               className="w-full h-auto object-contain"
//             />
//           </div>
//           <div className="w-full max-w-[180px]">
//             <img
//               src="/menwear.webp"
//               alt="Men's Wear Archive"
//               className="w-full h-auto object-contain"
//             />
//           </div>
//           <div className="w-full max-w-[180px]">
//             <img
//               src="/sarees.webp"
//               alt="Sarees Archive"
//               className="w-full h-auto object-contain"
//             />
//           </div>
//           <div className="w-full max-w-[180px]">
//             <img
//               src="/jewellery.webp"
//               alt="Jewellery Archive"
//               className="w-full h-auto object-contain"
//             />
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default WinterArchiveSection

import React from "react";

const WinterArchiveSection = () => {
  return (
    <section className="w-full bg-[#2C1911] py-4 px-3 sm:px-4 md:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
        
        {/* Left Banner */}
        <div className="relative lg:col-span-7 rounded-2xl overflow-hidden">
          <img
            src="/gold.webp"
            alt="Gold Archive"
            className="w-full h-auto object-cover rounded-2xl"
          />

          <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-6 md:bottom-6 md:left-8">
            <button className="px-4 py-2 sm:px-6 sm:py-2.5 lg:px-8 lg:py-3 bg-[#1F100B]/40 backdrop-blur-sm border border-[#523326] text-white text-xs sm:text-sm md:text-base font-medium rounded-md hover:border-[#EAD09E] transition-all duration-300">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Grid */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {[
            {
              image: "/lehanga.webp",
              alt: "Lehenga Archive",
            },
            {
              image: "/menwear.webp",
              alt: "Men's Wear Archive",
            },
            {
              image: "/sarees.webp",
              alt: "Sarees Archive",
            },
            {
              image: "/jewellery.webp",
              alt: "Jewellery Archive",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group flex justify-center"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full max-w-[150px] sm:max-w-[180px] md:max-w-[200px] object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WinterArchiveSection;