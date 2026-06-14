
// import React from "react";
// import { Search, ShoppingBag, Menu, Heart } from "lucide-react";
// import { Link } from "react-router-dom";

// const Navbar = ({ setSidebarOpen }) => {
//   return (
//     <nav className="fixed top-0 left-0 w-full border-b  z-50  px-4 py-3 md:px-10 bg-[#E3E2E2] ">

//       <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">

//         {/* Left */}
//         <div className="flex items-center gap-6">

//           <button
//             onClick={() => setSidebarOpen(prev => !prev)}
//             className="hover:opacity-70"
//           >
//             <Menu className="h-5 w-5" />
//           </button>

//           <div className="hidden md:flex items-center gap-6 text-sm text-[#464747] hover:text-[#000000] transition">

//             <Link to="/CategoryCard">
//               New Arrivals
//             </Link>

//             <Link to="/login">
//               Login
//             </Link>

//             <Link to="/Register">
//                Register
//             </Link>

//           </div>
//         </div>

//         {/* Center */}
//         <div className="flex justify-center  text-[#1C1B1B] ">
//           <Link
//             to="/"
//             className="text-5xl font-serif "
//           >
//             AURA LUXE
//           </Link>
//         </div>

//         {/* Right */}
//         <div className="flex justify-end gap-5">

//           <Search className="h-5 w-5 cursor-pointer" />

//           <Link to="/MyWishlist">
//             <Heart className="h-5 w-5" />
//           </Link>

//           <Link to="/ShopingCart">
//             <ShoppingBag className="h-5 w-5" />
//           </Link>

//         </div>

//       </div>

//     </nav>
//   );
// };

// export default Navbar;






import React, { useState } from "react";
import { Search, ShoppingBag, Menu, Heart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ setSidebarOpen }) => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    navigate(`/CategoryCard?name=${search}`);
  };

  return (
    <nav className="fixed top-0 left-0 w-full border-b z-50 px-4 py-3 md:px-10 bg-[#E3E2E2]">
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
        
        {/* Left */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setSidebarOpen((prev) => !prev)}
            className="hover:opacity-70"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="hidden md:flex items-center gap-6 text-sm text-[#464747]">
            <Link
              to="/CategoryCard"
              className="hover:text-black transition"
            >
              New Arrivals
            </Link>

            <Link
              to="/login"
              className="hover:text-black transition"
            >
              Login
            </Link>

            <Link
              to="/Register"
              className="hover:text-black transition"
            >
              Register
            </Link>
          </div>
        </div>

        {/* Center */}
        <div className="flex justify-center text-[#1C1B1B]">
          <Link
            to="/"
            className="text-3xl md:text-5xl font-serif"
          >
            AURA LUXE
          </Link>
        </div>

        {/* Right */}
        <div className="flex justify-end items-center gap-4">
          
          {/* Search Form */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center border rounded-full bg-white overflow-hidden"
          >
            <input
              type="text"
              placeholder="Search product..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-3 py-1.5 text-sm outline-none w-40"
            />

            <button
              type="submit"
              className="px-3"
            >
              <Search className="h-4 w-4 cursor-pointer" />
            </button>
          </form>

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