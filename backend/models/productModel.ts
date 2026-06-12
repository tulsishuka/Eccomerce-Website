
import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Product name must be provided"],
      unique: [true, "Product name already exists, please use another one"],
    },

    price: {
      type: Number,
      required: [true, "Product price must be provided"],
    },

    description: {
      type: String,
      required: [true, "Product description must be provided"],
    },

    image: {
      type: String,
      default: null,
    },

    category: {
      type: String,
      required: [true, "Product category must be provided"],
      enum: ["sepatu", "Flower", "Shoes", "Clothing"],
    },

    stock: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;