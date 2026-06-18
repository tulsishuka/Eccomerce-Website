
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();
  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:3000/api/v1/cart",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCart(res.data.cart);

      const ids =
        res.data.cart?.items?.map(
          (item) => item.product._id
        ) || [];

      setSelectedItems(ids);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (productId) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:3000/api/v1/cart/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  const updateQuantity = async (
    productId,
    quantity
  ) => {
    try {
      const token = localStorage.getItem("token");

      if (quantity < 1) return;

      await axios.put(
        "http://localhost:3000/api/v1/cart/quantity",
        {
          productId,
          quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  const toggleSelect = (productId) => {
    setSelectedItems((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  useEffect(() => {
    fetchCart();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading Cart...
      </div>
    );
  }

  const total =
    cart?.items
      ?.filter((item) =>
        selectedItems.includes(
          item.product._id
        )
      )
      .reduce(
        (sum, item) =>
          sum +
          item.product.price *
            item.quantity,
        0
      ) || 0;

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-10">
        Shopping Cart
      </h1>

      {!cart?.items?.length ? (
        <h2>Your cart is empty</h2>
      ) : (
        <>
          <div className="space-y-6">
            {cart.items.map((item) => (
              <div
                key={item.product._id}
                className="flex gap-4 border rounded-xl p-4 bg-white"
              >
                {/* Checkbox */}
                <input
                  type="checkbox"
                  checked={selectedItems.includes(
                    item.product._id
                  )}
                  onChange={() =>
                    toggleSelect(
                      item.product._id
                    )
                  }
                  className="mt-2"
                />

                {/* Image */}
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-28 h-28 object-cover rounded"
                />

                {/* Info */}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">
                    {item.product.name}
                  </h3>

                  <p className="text-green-600 font-bold mt-1">
                    ₹{item.product.price}
                  </p>

                  {/* Quantity */}
                  <div className="flex items-center gap-3 mt-4">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.product._id,
                          item.quantity - 1
                        )
                      }
                      className="w-8 h-8 border rounded"
                    >
                      -
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        updateQuantity(
                          item.product._id,
                          item.quantity + 1
                        )
                      }
                      className="w-8 h-8 border rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Remove */}
                <button
                  onClick={() =>
                    removeItem(
                      item.product._id
                    )
                  }
                  className="text-red-500 font-medium"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-10 border-t pt-6">
            <h2 className="text-3xl font-bold">
              Total: ₹{total}
            </h2>

            <p className="text-gray-500 mt-2">
              {selectedItems.length} item(s)
              selected
            </p>

            <button
              className="mt-5 bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800"
           
              onClick={() => {
  const selectedProducts = cart.items.filter((item) =>
    selectedItems.includes(item.product._id)
  );

  localStorage.setItem(
    "checkoutItems",
    JSON.stringify(selectedProducts)
  );

  navigate("/checkout");
}}
            >
              Checkout Selected
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;