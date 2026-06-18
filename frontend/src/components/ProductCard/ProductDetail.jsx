import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
const [cartLoading, setCartLoading] = useState(false);

const addToCart = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login first");
      return false;
    }

    setCartLoading(true);

    await axios.post(
      "http://localhost:3000/api/v1/cart",
      {
        productId: product._id,
        quantity: 1,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Update navbar cart count
    window.dispatchEvent(new Event("cartUpdated"));

    toast.success("Added to cart");

    return true;
  } catch (error) {
    console.log(error);
    toast.error("Failed to add cart");
    return false;
  } finally {
    setCartLoading(false);
  }
};

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/v1/product/${id}`
        );
        setProduct(res.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Product not found
      </div>
    );
  }

  return (
  
    
  <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
    <div className="bg-white rounded-2xl shadow p-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[420px] object-cover rounded-xl"
      />
    </div>

    <div className="flex flex-col justify-center">

      <p className="text-sm text-gray-400 uppercase">
        {product.category} / {product.subCategory}
      </p>

      <h1 className="text-4xl font-bold mt-2">
        {product.name}
      </h1>

      <p className="text-gray-600 mt-4 leading-relaxed">
        {product.description}
      </p>

      <p className="text-3xl font-bold mt-6 text-green-600">
        ₹{product.price}
      </p>

      <p className="text-sm text-gray-500 mt-2">
        Stock Available: {product.stock}
      </p>

      <div className="flex gap-4 mt-8">

        <button
  onClick={addToCart}
  disabled={cartLoading}
  className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
>
  {cartLoading ? "Adding..." : "Add To Cart"}
</button>

      <button
  onClick={async () => {
    await addToCart();
    navigate("/cart");
  }}
  className="flex-1 border border-black py-3 rounded-lg hover:bg-black hover:text-white transition"
>
  Buy Now
</button>

      </div>
    </div>
  </div>
);
};

export default ProductDetail;