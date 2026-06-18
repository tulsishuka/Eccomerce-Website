
import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Ethnic Wear",
    image: "/sanskari.webp",
  },
  {
    id: 2,
    name: "Western Dresses",
    image: "/western.webp",
  },
  {
    id: 3,
    name: "Menswear",
    image: "/men.webp",
  },
  {
    id: 4,
    name: "Footwear",
    image: "/wear.webp",
  },
  {
    id: 5,
    name: "Home Decor",
    image: "/decor.webp",
  },
  {
    id: 6,
    name: "Beauty",
    image: "/beauty.webp",
  },
  {
    id: 7,
    name: "Accessories",
    image: "/bagi.webp",
  },
  {
    id: 8,
    name: "Grocery",
    image: "/tokari.webp",
  },
];

const CategoryNav = () => {
  return (
    <section className="w-full bg-white text-gray-800 px-4 py-6 md:py-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-start md:justify-center gap-4 md:gap-6 lg:gap-8 overflow-x-auto scrollbar-none pb-2">
          {categories.map((category) => (
            <Link
          
              to="/CategoryCard"
            >
              <div className="flex-shrink-0 w-[90px] sm:w-[110px] md:w-[120px] lg:w-[130px] flex flex-col items-center group cursor-pointer">
                <div className="w-full aspect-square overflow-hidden rounded-lg shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 transition-colors duration-300 group-hover:text-purple-700">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryNav;