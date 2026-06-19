"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUpload = exports.deleteProduct = exports.updateProduct = exports.detailProduct = exports.getProducts = exports.createProduct = void 0;
const asyncHandler_1 = __importDefault(require("../middlewares/asyncHandler"));
const productModel_1 = __importDefault(require("../models/productModel"));
const mongoose_1 = __importDefault(require("mongoose"));
exports.createProduct = (0, asyncHandler_1.default)(async (req, res, next) => {
    const newProduct = await productModel_1.default.create(req.body);
    res.status(201).json({
        message: "Product added successfully!",
        data: newProduct,
    });
});
exports.getProducts = (0, asyncHandler_1.default)(async (req, res) => {
    const { category, name, page = 1, limit = 30 } = req.query;
    const filter = {};
    // ✅ category filter
    if (category) {
        filter.category = category.toLowerCase().trim();
    }
    // ✅ name search
    if (name) {
        filter.name = { $regex: name, $options: "i" };
    }
    const skip = (Number(page) - 1) * Number(limit);
    const totalProducts = await productModel_1.default.countDocuments(filter);
    const data = await productModel_1.default.find(filter)
        .skip(skip)
        .limit(Number(limit));
    res.status(200).json({
        message: "Displaying products",
        total: totalProducts,
        data,
    });
});
exports.detailProduct = (0, asyncHandler_1.default)(async (req, res) => {
    const id = req.params.id;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: "Invalid product ID!" });
        return;
    }
    const product = await productModel_1.default.findById(id);
    if (!product) {
        res.status(404).json({ message: "Product not found!" });
        return;
    }
    res.status(200).json({
        message: "Product details displayed successfully",
        data: product,
    });
});
exports.updateProduct = (0, asyncHandler_1.default)(async (req, res) => {
    const paramId = req.params.id;
    const updatedProduct = await productModel_1.default.findByIdAndUpdate(paramId, req.body, {
        runValidators: false,
        new: true,
    });
    res.status(201).json({
        message: "Product updated successfully!",
        data: updatedProduct,
    });
});
exports.deleteProduct = (0, asyncHandler_1.default)(async (req, res) => {
    const paramId = req.params.id;
    const deletedProduct = await productModel_1.default.findByIdAndDelete(paramId);
    res.status(200).json({
        message: "Product deleted successfully!",
        data: deletedProduct,
    });
});
/*
FILE UPLOAD
*/
exports.fileUpload = (0, asyncHandler_1.default)(async (req, res) => {
    const file = req.file;
    if (!file) {
        res.status(400);
        throw new Error("No file uploaded");
    }
    const imageFileName = file.filename;
    const pathImageFile = `uploads/${imageFileName}`;
    res.status(200).json({
        message: "Image uploaded successfully",
        image: pathImageFile,
    });
});
