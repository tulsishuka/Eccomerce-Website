import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/productModel";

dotenv.config();

const products = [
  {
    name: "Red Dress",
    price: 3500,
    description: "Comfortable gown for women",
    category: "women",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
    stock: 10,
  },
  {
    name: "Adidas Hoodie",
    price: 2200,
    description: "Warm winter hoodie",
    category: "men",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    stock: 15,
  },
  {
    name: "Women's Party Dress",
    price: 2800,
    description: "Elegant party dress",
    category: "women",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
    stock: 8,
  },
  {
    name: "Women's Handbag",
    price: 1900,
    description: "Stylish handbag",
    category: "women",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    stock: 12,
  },
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("Products seeded successfully ✅");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedProducts();