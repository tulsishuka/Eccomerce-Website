import React from 'react'

const WinterArchiveSection = () => {
  return (
    <section className="w-full bg-white text-stone-900 px-4 py-20 md:px-12 lg:px-20 font-sans selection:bg-stone-100">
      <div className="max-w-7xl mx-auto">
      
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Block: Editorial Text & Badges (5 Columns wide on large screens) */}
          <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-6">
            
            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-[1.1] text-stone-950 mb-6">
              The Winter <br className="hidden sm:inline" /> Archive
            </h2>
            
            {/* Description */}
            <p className="text-sm text-[#000000] font-light leading-relaxed tracking-wide mb-8 max-w-md">
              Last opportunities to acquire iconic pieces from our previous 
              seasonal collection at exceptional value.
            </p>

            {/* Badges Row */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-stone-950 text-white text-[10px] md:text-xs font-semibold tracking-wider uppercase px-4 py-2 select-none">
                Up to 40% Off
              </span>
              <span className="bg-transparent text-stone-600 border border-stone-300 text-[10px] md:text-xs font-medium tracking-wider uppercase px-4 py-2 select-none">
                Limited Quantities
              </span>
            </div>

            {/* Underlined Text CTA */}
            <a 
              href="#shop-archive" 
              className="text-xs md:text-sm font-semibold tracking-widest uppercase text-stone-950 hover:text-stone-700 transition-colors border-b-2 border-stone-950 pb-1"
            >
              Shop the Archive
            </a>
          </div>
<div className="lg:col-span-3 w-full h-[300px] md:h-[300px] lg:h-[400px] bg-stone-50 overflow-hidden">
            <img
              src="/saree.png" 
              alt="Winter Knitwear Collection"
              className="w-full h-full object-cover object-center hover:scale-[1.02] transition-transform duration-750 ease-out"
            />
          </div>
<div className="lg:col-span-3 w-full h-[450px] md:h-[550px] lg:h-[450px] bg-stone-50 overflow-hidden lg:translate-y-12">
            <img
              src="/watch.png" // Replace with your shopping bag/street image path
              alt="Archive Accessories"
              className="w-full h-full object-cover object-center hover:scale-[1.02] transition-transform duration-750 ease-out"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default WinterArchiveSection