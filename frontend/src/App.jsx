import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home/Home";
import CategoryCard from "./components/CategoryCard/CategoryCard";
import ProductDetail from "./components/ProductCard/ProductDetail";
import ShopingCart from "./components/ShopingCart/ShopingCart";
import MyWishlist from "./components/MyWishlist/MyWishlist";
import CustomerAccount from "./components/CustomerAccount/CustomerAccount";
import Login from "./components/Login";
import Register from "./components/Register";
import Order from "./components/Order/Order";
import OrderDetail from "./components/Order/OrderDetail";
import Verify from "./components/Verify";
import ProfileDropdown from "./layouts/ProfileDropdown";

const App = () => {
  return (
    <>
      <Navbar />

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
        <Route path="/ProfileDropdown" element={<ProfileDropdown />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;