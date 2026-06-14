import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChevronDown } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const CategoryCard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [searchParams] = useSearchParams();
  const search = searchParams.get("name");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        let url = "http://localhost:3000/api/v1/product?";
        const params = [];

        if (search) {
          params.push(`name=${search}`);
        }

        if (selectedCategory) {
          params.push(`category=${selectedCategory}`);
        }

        url += params.join("&");

        const res = await axios.get(url);

        setProducts(res.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [search, selectedCategory]);

  return (
    <section className="w-full bg-white text-stone-900 px-4 py-24 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center border-b pb-5 mb-10">
          <div>
            <span className="text-xs tracking-[0.25em] uppercase text-amber-800 font-semibold">
              Premium Collection
            </span>

            <h1 className="text-3xl font-serif">
              Fashion Collection
            </h1>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <span>
              Showing {products.length} Products
            </span>

            <div className="flex items-center gap-1 border px-3 py-2">
              <span>Featured</span>
              <ChevronDown size={14} />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">

          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase mb-4">
              Category
            </h3>

            <div className="space-y-3">

              <button
                onClick={() => setSelectedCategory("")}
                className={`block ${
                  selectedCategory === ""
                    ? "font-semibold text-black"
                    : "text-gray-500"
                }`}
              >
                All Products
              </button>

              <button
                onClick={() => setSelectedCategory("men")}
                className={`block ${
                  selectedCategory === "men"
                    ? "font-semibold text-black"
                    : "text-gray-500"
                }`}
              >
                Men
              </button>

              <button
                onClick={() => setSelectedCategory("women")}
                className={`block ${
                  selectedCategory === "women"
                    ? "font-semibold text-black"
                    : "text-gray-500"
                }`}
              >
                Women
              </button>

            </div>
          </aside>

          {/* Product Grid */}
          <main className="lg:col-span-9">

            {loading ? (
              <div className="text-center py-20 text-lg">
                Loading Products...
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-20 text-lg">
                No Products Found
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

                {products.map((product) => (
                  <div
                    key={product._id}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-[4/5] overflow-hidden bg-gray-100 rounded-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>

                    <h3 className="mt-4 text-sm font-medium">
                      {product.name}
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      ₹{product.price}
                    </p>

                    <p className="text-xs text-gray-400 mt-1 capitalize">
                      {product.category}
                    </p>
                  </div>
                ))}

              </div>
            )}

          </main>

        </div>
      </div>
    </section>
  );
};

export default CategoryCard;