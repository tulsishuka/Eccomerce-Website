

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
import CustomerAccount from "./components/CustomerAccount/CustomerAccount";
import Login from "./components/Login";
import Register from "./components/Register";
import Order from "./components/Order/Order";
import OrderDetail from "./components/Order/OrderDetail";
import Verify from "./components/Verify";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar setSidebarOpen={setSidebarOpen} />

      {sidebarOpen && <DashboardSidebar />}

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
          <Route path="/Account" element={<CustomerAccount />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/OrderDetail" element={<OrderDetail />} />
          <Route path="/Verify" element={<Verify />} />

         
        </Routes>

        <Footer />
      </div>
    </>
  );
};

export default App;




