import React, {
  useEffect,
  useState,
} from "react";
import axios from "axios";

const Wishlist = () => {
  const [products, setProducts] =
    useState([]);

  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem("user")
    );

    axios
      .get(
        `http://localhost:3000/api/v1/wishlist/${user._id}`
      )
      .then((res) =>
        setProducts(res.data.data)
      );
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-8">
        My Wishlist ❤️
      </h1>

      <div className="grid md:grid-cols-4 gap-6">
        {products.map((item) => (
          <div key={item._id}>
            <img
              src={item.product.image}
              alt=""
            />

            <h3>
              {item.product.name}
            </h3>

            <p>
              ₹{item.product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;