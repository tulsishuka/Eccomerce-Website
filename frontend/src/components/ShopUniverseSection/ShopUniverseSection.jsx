
import React from 'react'

const categories = [
  {
    id: 1,
    tag: 'Fragrance & Objects',
    title: 'Sensory Identity',
    cta: 'Shop Now',
    link: '/fragrance',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800', // Replace with your perfume image
  },
  {
    id: 2,
    tag: 'The Atelier',
    title: 'Modern Craftsmanship',
    cta: 'Discover Atelier',
    link: '/atelier',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800', // Replace with your clothes hanger image
  },
]

const ShopUniverseSection = () => {
  return (
    <section className="w-full bg-[#F2F0F0] text-stone-900 px-4 py-20 md:px-12 lg:px-20 font-sans selection:bg-stone-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Section */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif italic font-medium text-stone-950 tracking-wide mb-4">
            Shop the Universe
          </h2>
          <p className="text-xs md:text-sm max-w-xl font-medium text-[#474746] font-light leading-relaxed tracking-wide">
            Explore the diverse aesthetics that define the Aura Luxe lifestyle, from 
            architectural evening wear to sculptural accessories.
          </p>
        </div>

        {/* Two Column Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="relative w-full aspect-square md:aspect-[4/4] bg-stone-200 overflow-hidden group cursor-pointer"
            >
              {/* Background Image Container */}
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />

              {/* Adaptive Linear Overlay Gradient (Darkens the bottom for typography contrast) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

              {/* Content Overlay */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-10 text-white">
                
                {/* Micro Tag */}
                <span className="text-[10px] tracking-[0.25em] uppercase text-stone-300/90 font-medium mb-2 block">
                  {category.tag}
                </span>

                {/* Card Title */}
                <h3 className="text-2xl md:text-3xl font-serif font-normal tracking-wide mb-4 text-white">
                  {category.title}
                </h3>

                {/* Minimalist CTA Link */}
                <div>
                  <a 
                    href={category.link} 
                    className="inline-block text-xs font-medium tracking-wider uppercase border-b border-white pb-0.5 hover:text-stone-200 hover:border-stone-200 transition-colors duration-200"
                  >
                    {category.cta}
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ShopUniverseSection