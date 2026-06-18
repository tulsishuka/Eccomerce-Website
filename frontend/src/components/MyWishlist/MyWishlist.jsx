import React, { useEffect, useState } from "react";
import axios from "axios";

const MyWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchWishlist = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user?._id) {
        setLoading(false);
        return;
      }

      const res = await axios.get(
        `http://localhost:3000/api/v1/wishlist/${user._id}`
      );

      setWishlistItems(res.data.data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const removeWishlist = async (wishlistId) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/v1/wishlist/${wishlistId}`
      );

      setWishlistItems((prev) =>
        prev.filter((item) => item._id !== wishlistId)
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2>Loading Wishlist...</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      <h1 className="text-3xl font-bold mb-8 mt-10">My Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty ❤️</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {wishlistItems.map((item) => {
            const product = item?.product;

        
            if (!product) return null;

            return (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image || "/placeholder.png"}
                    alt={product.name || "product"}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-medium">
                    {product.name}
                  </h3>

                  <p className="font-bold mt-2">
                    ₹{product.price}
                  </p>

                  <button
                    onClick={() => removeWishlist(item._id)}
                    className="mt-4 w-full border border-red-500 text-red-500 py-2 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}

        </div>
      )}
    </div>
  );
};

export default MyWishlist;