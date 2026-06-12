
import React from 'react'

const products = [
  {
    id: 1,
    name: 'Structure Coat',
    price: '$1,250',
    image: '/bag1.jpg',
    isLarge: true,
  },
  {
    id: 2,
    name: 'Orbital Bag',
    price: '$890',
    image: '/bag3.jpg', 
    isLarge: false,
    offset: true, 
  },
  {
    id: 3,
    name: 'Aura Runner',
    price: '$420',
    image: '/bag5.jpg',
    isLarge: false,
  },
]

const ProductCard = () => {
  return (
    <section className="w-full bg-white text-stone-900 px-4 py-16 md:px-12 lg:px-20 font-sans selection:bg-stone-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-between items-end  pb-6 mb-12">
          <div>
            <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#937230] font-semibold block mb-2">
              Selected Pieces
            </span>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight font-normal text-stone-950">
              Curated Essentials
            </h2>
          </div>
          
          <a 
            href="/CategoryCard" 
            className="text-xs md:text-sm font-medium tracking-wide text-[#775A19] hover:text-stone-950 transition-colors duration-200 border-b border-stone-400 pb-0.5"
          >
            Explore All
          </a>
        </div>

        {/* Asymmetric Product Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">



{products.filter(p => p.isLarge).map((product) => (
  <div
    key={product.id}
    className="md:col-span-6 flex flex-col group"
  >
    <div className="w-full h-[420px] sm:h-[500px] lg:h-[600px] bg-stone-50 overflow-hidden mb-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
      />
    </div>

    <h3 className="text-xl md:text-2xl font-serif text-stone-950 mb-1">
      {product.name}
    </h3>

    <p className="text-sm text-stone-500">
      {product.price}
    </p>
  </div>
))}








<div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
  {products.filter(p => !p.isLarge).map((product) => (
    <div
      key={product.id}
      className={`flex flex-col group ${
        product.offset ? "md:mt-20" : ""
      }`}
    >
      <div className="w-full aspect-[4/5] overflow-hidden bg-stone-50 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      <h3 className="text-base md:text-lg font-medium text-stone-900 mb-1">
        {product.name}
      </h3>

      <p className="text-sm text-stone-500">
        {product.price}
      </p>
    </div>
  ))}
</div>









        </div>

      </div>
    </section>
  )
}

export default ProductCard