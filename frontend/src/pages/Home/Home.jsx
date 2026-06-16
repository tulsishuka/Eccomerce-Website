import React from "react";
import Hero from "../../components/Hero/Hero";
import ProductCard from "../../components/ProductCard/ProductCard";
import ShopUniverseSection from "../../components/ShopUniverseSection/ShopUniverseSection";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
import WinterArchiveSection from "../../components/WinterArchiveSection/WinterArchiveSection";
import PromotionBanner from "../../components/PromotionBanner";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

const Home = () => {
  return (
    <>
      <Hero />
       <ShopUniverseSection />
      <ProductCard />
     
      <WinterArchiveSection/>
      <TestimonialsSection />
      <PromotionBanner/>
      <CategoryCard/>
    </>
  );
};

export default Home;