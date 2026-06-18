
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChevronDown } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CategoryCard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wishlistItems, setWishlistItems] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("name") || "";
  const category = searchParams.get("category") || "";
const navigate = useNavigate();

const toggleWishlist = async (productId) => {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  if (!user) {
    alert("Please login first");
    return;
  }

  try {
    // Remove from wishlist
    if (wishlistItems.includes(productId)) {
      const res = await axios.get(
        `http://localhost:3000/api/v1/wishlist/${user._id}`
      );

      const item = res.data.data.find(
        (w) => w.product._id === productId
      );

      if (item) {
        await axios.delete(
          `http://localhost:3000/api/v1/wishlist/${item._id}`
        );

        setWishlistItems((prev) =>
          prev.filter((id) => id !== productId)
        );
      }

      return;
    }

    // Add to wishlist
    await axios.post(
      "http://localhost:3000/api/v1/wishlist/add",
      {
        userId: user._id,
        productId,
      }
    );

    setWishlistItems((prev) => [
      ...prev,
      productId,
    ]);
  } catch (error) {
    console.log(error);
  }
};


const fetchWishlist = async () => {
  try {
    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (!user?._id) return;

    const res = await axios.get(
      `http://localhost:3000/api/v1/wishlist/${user._id}`
    );

    const ids = res.data.data.map(
      (item) => item.product._id
    );

    setWishlistItems(ids);
  } catch (error) {
    console.log(error);
  }
};


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
  fetchWishlist();
}, [search, category]);



  const handleCategoryChange = (newCategory) => {
    const params = new URLSearchParams();

    if (!newCategory) {
      setSearchParams({});
      return;
    }
    params.set("category", newCategory.toLowerCase().trim());
    setSearchParams(params);
  };

  return (

<section className="min-h-screen bg-[#faf9f7] py-24"> 

  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 border-b border-gray-200 pb-6 mb-10">
      <div>
      

        <h1 className="text-4xl font-serif mt-2">
          {search
            ? `Search: "${search}"`
            : category
            ? `${category.charAt(0).toUpperCase() + category.slice(1)} Collection`
            : "All Products"}
        </h1>

      
      </div>
      <div className="flex items-center gap-4">
        {/* CATEGORY DROPDOWN */}
        <div className="relative group">
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full text-sm hover:bg-gray-100 transition">
            Category
            <ChevronDown size={16} />
          </button>

          <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg hidden group-hover:block z-50">
            <button
              onClick={() => handleCategoryChange("")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              All Products
            </button>

            <button
              onClick={() => handleCategoryChange("men")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Men
            </button>

            <button
              onClick={() => handleCategoryChange("women")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Women
            </button>
          </div>
        </div>
        <div className="relative group">
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full text-sm hover:bg-gray-100 transition">
            Featured
            <ChevronDown size={16} />
          </button>

          <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg hidden group-hover:block z-50">
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
              Newest
            </button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
              Price: Low to High
            </button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
              Price: High to Low
            </button>
          </div>
        </div>

      </div>
    </div>

    {/* PRODUCTS GRID */}
    <main>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="h-12 w-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
      ) : products.length === 0 ? (
        <div className="bg-white rounded-xl p-12 text-center shadow-sm">
          <h3 className="text-2xl font-medium mb-2">No Products Found</h3>
          <p className="text-gray-500">Try searching for something else.</p>
        </div>
      ) : (


      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">

  {products.map((product) => (
    <div
      key={product._id}
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
    >
      
      {/* VERY SMALL HEIGHT IMAGE */}
      <div className="relative aspect-[1/1.2] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />

        <button
          onClick={() => toggleWishlist(product._id)}
          className="absolute top-1 right-1 bg-white p-1 rounded-full shadow hover:scale-110 transition"
        >
          <Heart
            size={14}
            className={`transition ${
              wishlistItems.includes(product._id)
                ? "fill-red-500 text-red-500"
                : "text-gray-500"
            }`}
          />
        </button>
      </div>

      {/* ULTRA COMPACT CONTENT */}
      <div className="p-2 leading-tight">
        <p className="text-[9px] uppercase text-gray-400">
          {product.category}
        </p>

        <h3 className="font-medium text-[11px] line-clamp-1">
          {product.name}
        </h3>

        <p className="text-sm font-semibold mt-0.5">
          ₹{product.price}
        </p>

        <button
  onClick={() => navigate(`/product/${product._id}`)}
  className="mt-1 w-full py-1 text-[10px] rounded border border-black hover:bg-black hover:text-white transition"
>
  View
</button>
      </div>

    </div>
  ))}
</div>
      )}
    </main>

  </div>
</section>


  );
};

export default CategoryCard;