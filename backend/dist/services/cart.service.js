"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateQuantityService = exports.clearCartService = exports.removeFromCartService = exports.getCartService = exports.addToCartService = void 0;
const mongoose_1 = require("mongoose");
const cart_model_1 = __importDefault(require("../models/cart.model"));
// Add product to cart
const addToCartService = async (userId, productId, quantity = 1) => {
    let cart = await cart_model_1.default.findOne({ user: userId });
    if (!cart) {
        cart = await cart_model_1.default.create({
            user: userId,
            items: [],
        });
    }
    const itemIndex = cart.items.findIndex((item) => item.product.toString() === productId);
    if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
    }
    else {
        cart.items.push({
            product: new mongoose_1.Types.ObjectId(productId),
            quantity,
        });
    }
    await cart.save();
    return await cart_model_1.default.findById(cart._id).populate("items.product");
};
exports.addToCartService = addToCartService;
// Get cart
const getCartService = async (userId) => {
    return await cart_model_1.default.findOne({ user: userId }).populate("items.product");
};
exports.getCartService = getCartService;
const removeFromCartService = async (userId, productId) => {
    const cart = await cart_model_1.default.findOne({
        user: userId,
    });
    if (!cart) {
        throw new Error("Cart not found");
    }
    cart.items = cart.items.filter((item) => item.product.toString() !== productId);
    await cart.save();
    return await cart_model_1.default.findOne({
        user: userId,
    }).populate("items.product");
};
exports.removeFromCartService = removeFromCartService;
// Clear cart
const clearCartService = async (userId) => {
    const cart = await cart_model_1.default.findOne({ user: userId });
    if (!cart) {
        throw new Error("Cart not found");
    }
    cart.items = [];
    await cart.save();
    return cart;
};
exports.clearCartService = clearCartService;
//////////////////
const updateQuantityService = async (userId, productId, quantity) => {
    const cart = await cart_model_1.default.findOne({
        user: userId,
    });
    if (!cart) {
        throw new Error("Cart not found");
    }
    const item = cart.items.find((item) => item.product.toString() === productId);
    if (!item) {
        throw new Error("Item not found");
    }
    item.quantity = quantity;
    await cart.save();
    return await cart_model_1.default.findOne({
        user: userId,
    }).populate("items.product");
};
exports.updateQuantityService = updateQuantityService;
