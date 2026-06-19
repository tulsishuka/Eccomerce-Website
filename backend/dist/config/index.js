"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const productModel_1 = __importDefault(require("../models/productModel"));
const productSeed_1 = require("./productSeed");
dotenv_1.default.config();
const seed = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGO_URI);
        await productModel_1.default.deleteMany();
        await productModel_1.default.insertMany(productSeed_1.products);
        console.log("Products inserted successfully");
        process.exit();
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
};
seed();
