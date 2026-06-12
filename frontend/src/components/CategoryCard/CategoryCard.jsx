import React from 'react'
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'

const categories = [
  { name: 'All Apparel', count: 144, active: true },
  { name: 'Outerwear', count: 32, active: false },
  { name: 'Knitwear', count: 46, active: false },
  { name: 'Tailoring', count: 28, active: false },
  { name: 'Accessories', count: 38, active: false },
]

const sizes = [
  { label: 'XS', active: false },
  { label: 'S', active: true },
  { label: 'M', active: false },
  { label: 'L', active: false },
  { label: 'XL', active: false },
]

const colors = [
  { name: 'Black', class: 'bg-stone-950 border-stone-950' },
  { name: 'White', class: 'bg-white border-stone-200' },
  { name: 'Tan', class: 'bg-amber-700 border-amber-700' },
  { name: 'Dark Green', class: 'bg-emerald-900 border-emerald-900' },
  { name: 'Beige', class: 'bg-orange-100 border-orange-100' },
]

const products = [
  {
    id: 1,
    name: 'Sculpted Wool Overcoat',
    price: '$1,250',
    tag: 'New Arrival',
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 2,
    name: 'Architectural Silk Shirt',
    price: '$495',
    image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 3,
    name: 'Cavalier Leather Boots',
    price: '$890',
    image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 4,
    name: 'Heritage Cashmere Knit',
    price: '$620',
    image: 'https://images.unsplash.com/photo-1610556559993-47124e22abc9?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 5,
    name: 'Structured Evening Blazer',
    price: '$1,180',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 6,
    name: 'Monolith Tote Bag',
    price: '$1,450',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=600'
  },
]

const CategoryCard = () => {
  return (
    <section className="w-full bg-white text-stone-900 px-4 py-24 md:px-12 lg:px-20 font-sans selection:bg-stone-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-stone-200/60 pb-5 mb-10 gap-4">
          <div>
            <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-amber-800/90 font-semibold block mb-1">
              Premium Ready-To-Wear
            </span>
            <h1 className="text-2xl md:text-3xl font-serif tracking-tight font-normal text-stone-950">
              Autumn/Winter Collections
            </h1>
          </div>
          
          {/* Controls: Product Counter & Dropdown Sort */}
          <div className="flex items-center gap-6 text-xs text-stone-500 self-end w-full sm:w-auto justify-between sm:justify-end">
            <span className="font-light tracking-wide">Showing 144 products</span>
            <div className="relative flex items-center gap-1 border border-stone-200 px-3 py-2 cursor-pointer bg-stone-50/50 hover:bg-stone-50 transition">
              <span className="font-medium text-stone-800">Sort By: Featured</span>
              <ChevronDown className="h-3 w-3 text-stone-500 stroke-[1.5]" />
            </div>
          </div>
        </div>

        {/* Content Layout: Sidebar + Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT SIDEBAR FILTERS (Takes 3 columns on large screens) */}
          <aside className="lg:col-span-3 space-y-8 hidden md:block">
            
            {/* Filter Section: Category */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-950 mb-4">Category</h3>
              <ul className="space-y-2.5">
                {categories.map((cat, i) => (
                  <li key={i} className="flex justify-between items-center text-xs tracking-wide cursor-pointer group">
                    <span className={`${cat.active ? 'font-semibold text-stone-950' : 'text-stone-500 group-hover:text-stone-950'} transition-colors`}>
                      {cat.name}
                    </span>
                    <span className="text-stone-400 font-light text-[11px]">({cat.count})</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Filter Section: Size Blocks */}
            <div className="pt-4 border-t border-stone-100">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-950 mb-4">Size</h3>
              <div className="flex flex-wrap gap-2">
                {sizes.map((sz, i) => (
                  <button 
                    key={i} 
                    className={`w-10 py-1.5 border text-[10px] font-medium tracking-wider transition-all duration-150 ${
                      sz.active 
                        ? 'bg-stone-950 text-white border-stone-950' 
                        : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400'
                    }`}
                  >
                    {sz.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Section: Color Swatches */}
            <div className="pt-4 border-t border-stone-100">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-950 mb-4">Color</h3>
              <div className="flex flex-wrap gap-2.5">
                {colors.map((col, i) => (
                  <button 
                    key={i} 
                    title={col.name}
                    className={`h-5 w-5 rounded-full border shadow-sm transition-transform duration-150 hover:scale-110 ${col.class}`} 
                  />
                ))}
              </div>
            </div>

            {/* Filter Section: Custom Price Range Slider */}
            <div className="pt-4 border-t border-stone-100">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-950 mb-4">Price Range</h3>
              <div className="relative w-full px-1">
                {/* Simulated Modern Minimal Range Slider */}
                <div className="w-full h-[3px] bg-stone-200 rounded-full relative mb-4">
                  <div className="absolute left-0 right-1/4 h-full bg-stone-950" />
                  <div className="absolute right-1/4 top-1/2 -translate-y-1/2 h-3.5 w-3.5 bg-stone-950 rounded-full border-2 border-white shadow cursor-pointer" />
                </div>
                <div className="flex justify-between items-center text-[11px] text-stone-500 font-light tracking-wide">
                  <span>$100</span>
                  <span>$2,000+</span>
                </div>
              </div>
            </div>

          </aside>

          {/* RIGHT PRODUCT GRID (Takes 9 columns on large screens) */}
          <main className="lg:col-span-9 flex flex-col">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
              {products.map((product) => (
                <div key={product.id} className="flex flex-col group cursor-pointer">
                  {/* Portrait Aspect Ratio Box */}
                  <div className="w-full aspect-[4/5] bg-stone-50 overflow-hidden mb-4 relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    />
                  </div>
                  
                  {/* Conditionally Render Minimalist Tag */}
                  {product.tag && (
                    <span className="bg-amber-100/70 text-amber-900 text-[9px] font-medium uppercase tracking-wider px-2 py-0.5 rounded self-start mb-2">
                      {product.tag}
                    </span>
                  )}

                  {/* Title & Price Information */}
                  <h3 className="text-sm font-sans font-medium text-stone-900 tracking-wide mb-1 group-hover:text-stone-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-stone-500 font-light tracking-wide">
                    {product.price}
                  </p>
                </div>
              ))}
            </div>

            {/* Pagination Controls Footer */}
            <div className="flex justify-center items-center gap-1 mt-16 pt-8 border-t border-stone-100 text-xs text-stone-500">
              <button className="p-2 hover:text-stone-950 transition" aria-label="Previous Page">
                <ChevronLeft className="h-4 w-4 stroke-[1.5]" />
              </button>
              
              <button className="px-3 py-1 hover:text-stone-950 transition font-light">1</button>
              <button className="px-3 py-1 text-stone-950 font-semibold border-b border-stone-950 translate-y-[1px]">2</button>
              <button className="px-3 py-1 hover:text-stone-950 transition font-light">3</button>
              <span className="px-2 text-stone-300 font-light">...</span>
              <button className="px-3 py-1 hover:text-stone-950 transition font-light">12</button>

              <button className="p-2 hover:text-stone-950 transition" aria-label="Next Page">
                <ChevronRight className="h-4 w-4 stroke-[1.5]" />
              </button>
            </div>

          </main>

        </div>

      </div>
    </section>
  )
}

export default CategoryCard