// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";

// import Navbar from "./layouts/Navbar";
// import Footer from "./layouts/Footer";

// import Home from "./pages/Home/Home";
// import CategoryCard from "./components/CategoryCard/CategoryCard";
// import ProductDetail from "./components/ProductCard/ProductDetail";
// import ShopingCart from "./components/ShopingCart/ShopingCart";
// import MyWishlist from "./components/MyWishlist/MyWishlist";

// import DashboardSidebar from "./components/DashboardSidebar";

// const App = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <>
//       <Navbar setSidebarOpen={setSidebarOpen} />

//       <div className="pt-20 flex min-h-screen">

//         {/* Sidebar */}
//         <div
//           className={`transition-all duration-300 overflow-hidden ${
//             sidebarOpen ? "w-64" : "w-0"
//           }`}
//         >
//           <DashboardSidebar />
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 transition-all duration-300">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/CategoryCard" element={<CategoryCard />} />
//             <Route path="/ProductDetail" element={<ProductDetail />} />
//             <Route path="/ShopingCart" element={<ShopingCart />} />
//             <Route path="/MyWishlist" element={<MyWishlist />} />
//           </Routes>
//         </div>

//       </div>

//       <Footer />
//     </>
//   );
// };

// export default App;

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

import Home from "./pages/Home/Home";
import CategoryCard from "./components/CategoryCard/CategoryCard";
import ProductDetail from "./components/ProductCard/ProductDetail";
import ShopingCart from "./components/ShopingCart/ShopingCart";
import MyWishlist from "./components/MyWishlist/MyWishlist";

import DashboardSidebar from "./components/DashboardSidebar";


const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar setSidebarOpen={setSidebarOpen} />

      {/* Fixed Sidebar */}
      {sidebarOpen && <DashboardSidebar />}

      {/* Main Content */}
      <div
        className={`pt-[72px] transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CategoryCard" element={<CategoryCard />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />
          <Route path="/ShopingCart" element={<ShopingCart />} />
          <Route path="/MyWishlist" element={<MyWishlist />} />

          {/* Add these when pages are created */}

          {/* <Route path="/account" element={<Account />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/addresses" element={<Addresses />} />
          <Route path="/settings" element={<Settings />} /> */}
        </Routes>

        <Footer />
      </div>
    </>
  );
};

export default App;