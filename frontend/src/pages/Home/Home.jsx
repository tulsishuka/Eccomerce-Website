import React from "react";
import Hero from "../../components/Hero/Hero";
import ProductCard from "../../components/ProductCard/ProductCard";
import ShopUniverseSection from "../../components/ShopUniverseSection/ShopUniverseSection";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
import WinterArchiveSection from "../../components/WinterArchiveSection/WinterArchiveSection";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductCard />
      <ShopUniverseSection />
      <WinterArchiveSection/>
      <TestimonialsSection />
    </>
  );
};

export default Home;