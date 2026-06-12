
import React from "react";
import { Search, ShoppingBag, Menu, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebarOpen }) => {
  return (
    <nav className="fixed top-0 left-0 w-full border-b  z-50  px-4 py-3 md:px-10 bg-[#E3E2E2] ">

      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">

        {/* Left */}
        <div className="flex items-center gap-6">

          <button
            onClick={() => setSidebarOpen(prev => !prev)}
            className="hover:opacity-70"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="hidden md:flex items-center gap-6 text-sm text-[#464747] hover:text-[#000000] transition">

            <Link to="/CategoryCard">
              New Arrivals
            </Link>

            <Link to="/ProductDetail">
              Collections
            </Link>

            <Link to="/ShopingCart">
              Shopping Cart
            </Link>

          </div>
        </div>

        {/* Center */}
        <div className="flex justify-center  text-[#1C1B1B] ">
          <Link
            to="/"
            className="text-5xl font-serif "
          >
            AURA LUXE
          </Link>
        </div>

        {/* Right */}
        <div className="flex justify-end gap-5">

          <Search className="h-5 w-5 cursor-pointer" />

          <Link to="/MyWishlist">
            <Heart className="h-5 w-5" />
          </Link>

          <Link to="/ShopingCart">
            <ShoppingBag className="h-5 w-5" />
          </Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;