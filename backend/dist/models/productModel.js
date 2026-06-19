"use strict";
// import mongoose from "mongoose";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const { Schema } = mongoose;
// const productSchema = new Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "Product name must be provided"],
//     },
//     price: {
//       type: Number,
//       required: [true, "Product price must be provided"],
//     },
//     description: {
//       type: String,
//       required: [true, "Product description must be provided"],
//     },
//     image: {
//       type: String,
//       default: null,
//     },
// subCategory: {
//   type: String,
//   required: false,
// },
//     category: {
//   type: String,
//   required: true,
// enum: [
//     "men",
//     "women",
//     "western-dresses",
//     "menswear",
//     "footwear",
//     "home-decor",
//     "beauty",
//     "accessories",
//     "grocery",
//   ],
// },
//     stock: {
//       type: Number,
//       default: 0,
//     },
//   },
//   { timestamps: true }
// );
// const Product = mongoose.model("Product", productSchema);
// export default Product;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "Product name must be provided"],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "Product price must be provided"],
    },
    description: {
        type: String,
        required: [true, "Product description must be provided"],
        trim: true,
    },
    image: {
        type: String,
        default: "",
    },
    category: {
        type: String,
        required: true,
        enum: [
            "men",
            "women",
            "western-dresses",
            "menswear",
            "footwear",
            "home-decor",
            "beauty",
            "accessories",
            "grocery",
        ],
    },
    subCategory: {
        type: String,
        required: false,
        trim: true,
    },
    stock: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });
const Product = mongoose_1.default.model("Product", productSchema);
exports.default = Product;
