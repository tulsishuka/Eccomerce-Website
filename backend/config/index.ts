import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/productModel";
import { products } from "./productSeed";

dotenv.config();

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("Products inserted successfully");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seed();