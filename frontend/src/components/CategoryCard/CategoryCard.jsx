
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChevronDown } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const CategoryCard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("name") || "";
  const category = searchParams.get("category") || "";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const params = new URLSearchParams();

        if (search) {
          params.append("name", search);
        }

        if (category) {
          params.append("category", category);
        }

        const url = `http://localhost:3000/api/v1/product?${params.toString()}`;

        const res = await axios.get(url);

        setProducts(res.data.data || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [search, category]);

  const handleCategoryChange = (newCategory) => {
    const params = new URLSearchParams();

    // If user clicks All Products, clear everything
    if (!newCategory) {
      setSearchParams({});
      return;
    }

    params.set("category", newCategory);
    setSearchParams(params);
  };

  return (
    <section className="min-h-screen bg-[#faf9f7] px-4 py-24 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 border-b border-gray-200 pb-6 mb-10">

          <div>
            <span className="uppercase tracking-[0.25em] text-xs text-amber-700 font-semibold">
              Aura Luxe
            </span>

            <h1 className="text-4xl font-serif mt-2">
              {search
                ? `Search: "${search}"`
                : category
                ? `${category.charAt(0).toUpperCase() + category.slice(1)} Collection`
                : "All Products"}
            </h1>

            <p className="text-gray-500 mt-2 text-sm">
              Discover premium fashion curated for modern lifestyles.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              {products.length} Products
            </span>

            <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full text-sm hover:bg-gray-100 transition">
              Featured
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">

          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <div className="sticky top-28">
              <h3 className="uppercase text-xs font-semibold tracking-widest mb-5">
                Categories
              </h3>

              <div className="space-y-3">

                <button
                  onClick={() => handleCategoryChange("")}
                  className={`w-full text-left px-4 py-3 rounded-lg transition ${
                    !category
                      ? "bg-black text-white"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  All Products
                </button>

                <button
                  onClick={() => handleCategoryChange("men")}
                  className={`w-full text-left px-4 py-3 rounded-lg transition ${
                    category === "men"
                      ? "bg-black text-white"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  Men
                </button>

                <button
                  onClick={() => handleCategoryChange("women")}
                  className={`w-full text-left px-4 py-3 rounded-lg transition ${
                    category === "women"
                      ? "bg-black text-white"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  Women
                </button>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="lg:col-span-9">

            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="h-12 w-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
              </div>
            ) : products.length === 0 ? (
              <div className="bg-white rounded-xl p-12 text-center shadow-sm">
                <h3 className="text-2xl font-medium mb-2">
                  No Products Found
                </h3>

                <p className="text-gray-500">
                  Try searching for something else.
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {products.map((product) => (
                  <div
                    key={product._id}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
                  >
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                      />
                    </div>

                    <div className="p-5">
                      <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                        {product.category}
                      </p>

                      <h3 className="font-medium text-lg">
                        {product.name}
                      </h3>

                      <p className="mt-2 text-xl font-semibold">
                        ₹{product.price}
                      </p>

                      <button className="mt-4 w-full py-2 rounded-lg border border-black hover:bg-black hover:text-white transition">
                        View Product
                      </button>
                    </div>
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