import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home/Home";
import CategoryCard from "./components/CategoryCard/CategoryCard";
import MyWishlist from "./components/MyWishlist/MyWishlist";
import Login from "./components/Login";
import Register from "./components/Register";

import Verify from "./components/Verify";
import ProfileDropdown from "./layouts/ProfileDropdown";
import ProductDetail from "./components/ProductCard/ProductDetail";
import Cart from "./pages/MyCart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import PlaceOrder from "./pages/PlaceOrder";
import OrderSuccess from "./pages/OrderSuccess";
const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CategoryCard" element={<CategoryCard />} />
        <Route path="/MyWishlist" element={<MyWishlist />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
    
        <Route path="/Verify" element={<Verify />} />
        <Route path="/ProfileDropdown" element={<ProfileDropdown />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/OrderSuccess" element={<OrderSuccess />} />
                <Route path="/PlaceOrder" element={<PlaceOrder />} />
                                <Route path="/Payment" element={<Payment />} />

      </Routes>

      <Footer />
    </>
  );
};

export default App;