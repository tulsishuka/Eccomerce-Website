"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductService = exports.updateProductService = exports.getProductByIdService = exports.getProductsService = exports.createProductService = void 0;
const productModel_1 = __importDefault(require("../models/productModel"));
const mongoose_1 = __importDefault(require("mongoose"));
const createProductService = async (data) => {
    const product = await productModel_1.default.create(data);
    return product;
};
exports.createProductService = createProductService;
const getProductsService = async (query) => {
    const queryObj = { ...query };
    const excludeFields = ["page", "limit", "name"];
    excludeFields.forEach((field) => delete queryObj[field]);
    let filter = queryObj;
    if (query.name) {
        filter = {
            name: { $regex: query.name, $options: "i" },
        };
    }
    let dbQuery = productModel_1.default.find(filter);
    const totalProducts = await productModel_1.default.countDocuments(filter);
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 30;
    const skip = (page - 1) * limit;
    dbQuery = dbQuery.skip(skip).limit(limit);
    if (query.page && skip >= totalProducts) {
        throw new Error("This page does not exist!");
    }
    const products = await dbQuery;
    return {
        total: totalProducts,
        data: products,
    };
};
exports.getProductsService = getProductsService;
const getProductByIdService = async (id) => {
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        throw new Error("Invalid product ID!");
    }
    const product = await productModel_1.default.findById(id);
    if (!product) {
        throw new Error("Product not found!");
    }
    return product;
};
exports.getProductByIdService = getProductByIdService;
const updateProductService = async (id, data) => {
    const product = await productModel_1.default.findByIdAndUpdate(id, data, {
        runValidators: false,
        new: true,
    });
    return product;
};
exports.updateProductService = updateProductService;
const deleteProductService = async (id) => {
    const product = await productModel_1.default.findByIdAndDelete(id);
    return product;
};
exports.deleteProductService = deleteProductService;
