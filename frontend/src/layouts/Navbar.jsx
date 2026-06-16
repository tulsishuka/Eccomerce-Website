import React, { useState } from "react";
import { Search, ShoppingCart, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";
import {

  Heart,
  Package,
} from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/CategoryCard?name=${search}`);
  };

  return (

     <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-2 md:gap-4">
          
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#580B4E]"
          >
            meesho
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-xl mx-2 md:mx-4">
            <form
              onSubmit={handleSearch}
              className="relative w-full flex items-center border border-gray-300 rounded-md bg-white focus-within:border-[#580B4E]"
            >
              <div className="absolute left-3 text-gray-400">
                <Search className="h-4 w-4 md:h-5 md:w-5" />
              </div>

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 md:pl-10 pr-3 py-2 text-sm md:text-base bg-transparent text-gray-700 placeholder-gray-400 outline-none rounded-md"
              />
            </form>
          </div>

  <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">

  {/* Wishlist */}
  <Link
    to="/MyWishlist"
    className="flex flex-col items-center justify-center text-gray-700 hover:text-[#580B4E] transition group"
  >
    <Heart className="h-5 w-5 group-hover:text-[#580B4E]" />
    <span className="hidden md:block text-xs font-medium mt-1">
      Wishlist
    </span>
  </Link>

  <div className="hidden md:block h-6 w-px bg-gray-200" />

  {/* Orders */}
  <Link
    to="/CategoryCard"
    className="flex flex-col items-center justify-center text-gray-700 hover:text-[#580B4E] transition group"
  >
    <Package className="h-5 w-5 group-hover:text-[#580B4E]" />
    <span className="hidden md:block text-xs font-medium mt-1">
      CategoryCard
    </span>
  </Link>

  <div className="hidden md:block h-6 w-px bg-gray-200" />

  {/* Profile */}
  <div className="relative">
    <button
      onClick={() => setShowProfile(!showProfile)}
      className="flex flex-col items-center justify-center text-gray-700 hover:text-[#580B4E] transition group"
    >
      <User className="h-5 w-5 group-hover:text-[#580B4E]" />

      <span className="hidden md:block text-xs font-medium mt-1">
        Profile
      </span>
    </button>

    {showProfile && <ProfileDropdown />}
  </div>

  <div className="hidden md:block h-6 w-px bg-gray-200" />

  {/* Cart */}
  <Link
    to="/ShopingCart"
    className="relative flex flex-col items-center justify-center text-gray-700 hover:text-[#580B4E] transition group"
  >
    <ShoppingCart className="h-5 w-5 group-hover:text-[#580B4E]" />

    <span className="absolute -top-1 -right-2 bg-[#580B4E] text-white text-[10px] min-w-[16px] h-4 px-1 rounded-full flex items-center justify-center">
      0
    </span>

    <span className="hidden md:block text-xs font-medium mt-1">
      Cart
    </span>
  </Link>

</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;