import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full bg-[#E3E2E2] text-stone-900 px-6 py-16 md:px-12 lg:px-20 border-t border-stone-200/60 font-sans selection:bg-stone-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Four-Column Link Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
          
          {/* Column 1: Brand Info (Takes 4 slots on desktop layout) */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-12">
            <Link to="/" className="text-xl font-serif tracking-[0.1em] uppercase text-stone-950 mb-4 select-none">
              Aura Luxe
            </Link>
            <p className="text-xs md:text-sm text-stone-500 font-light leading-relaxed tracking-wide max-w-xs">
              Redefining the boundaries of modern luxury through curated form and intentional design.
            </p>
          </div>

          {/* Column 2: Shop Links (Takes 2 slots on desktop layout) */}
          <div className="lg:col-span-2 flex flex-col space-y-3">
            <h4 className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.15em] text-stone-950 mb-1">
              Shop
            </h4>
            <Link to="/MyWishlist" className="text-xs md:text-sm text-stone-500 hover:text-stone-950 font-light tracking-wide transition-colors duration-200">
             MyWishlist
            </Link>
            <Link to="/register" className="text-xs md:text-sm text-stone-500 hover:text-stone-950 font-light tracking-wide transition-colors duration-200">
             Register
            </Link>
            <Link to="/accessories" className="text-xs md:text-sm text-stone-500 hover:text-stone-950 font-light tracking-wide transition-colors duration-200">
              Accessories
            </Link>
            <Link to="/archive" className="text-xs md:text-sm text-stone-500 hover:text-stone-950 font-light tracking-wide transition-colors duration-200">
              Archive
            </Link>
          </div>

          {/* Column 3: Information Links (Takes 2 slots on desktop layout) */}
          <div className="lg:col-span-2 flex flex-col space-y-3">
            <h4 className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.15em] text-stone-950 mb-1">
              Information
            </h4>
            <Link to="/sustainability" className="text-xs md:text-sm text-stone-500 hover:text-stone-950 font-light tracking-wide transition-colors duration-200">
              Sustainability
            </Link>
            <Link to="/customer-care" className="text-xs md:text-sm text-stone-500 hover:text-stone-950 font-light tracking-wide transition-colors duration-200">
              Customer Care
            </Link>
            <Link to="/shipping-returns" className="text-xs md:text-sm text-stone-500 hover:text-stone-950 font-light tracking-wide transition-colors duration-200">
              Shipping & Returns
            </Link>
            <Link to="/privacy-policy" className="text-xs md:text-sm text-stone-500 hover:text-stone-950 font-light tracking-wide transition-colors duration-200">
              Privacy Policy
            </Link>
          </div>

          {/* Column 4: Newsletter Box (Takes 4 slots on desktop layout) */}
          <div className="lg:col-span-4 flex flex-col items-start w-full">
            <h4 className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.15em] text-stone-950 mb-2">
              Newsletter
            </h4>
            <p className="text-xs md:text-sm text-stone-500 font-light leading-relaxed tracking-wide mb-4 max-w-sm">
              Join our inner circle for exclusive editorial previews and early access.
            </p>
            
            {/* Input Container Field */}
            <form onSubmit={(e) => e.preventDefault()} className="relative w-full max-w-md flex items-center border border-stone-300 bg-white">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full text-xs md:text-sm font-light tracking-wide text-stone-900 placeholder-stone-400 px-4 py-3 bg-transparent outline-none"
                required
              />
              <button 
                type="submit" 
                className="h-full px-4 border-l border-stone-200 text-stone-600 hover:text-stone-950 transition-colors duration-200"
                aria-label="Submit Email Address"
              >
                <ArrowRight className="h-4 w-4 stroke-[1.5]" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar: Horizontal Line & Copyright Statement */}
        <div className="pt-8 border-t border-stone-200/60 text-center">
          <p className="text-[10px] md:text-xs text-stone-400 font-light tracking-widest uppercase">
            &copy; 2026 Aura Luxe. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer