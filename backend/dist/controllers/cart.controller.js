"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateQuantity = exports.clearCart = exports.removeFromCart = exports.getCart = exports.addToCart = void 0;
const asyncHandler_1 = __importDefault(require("../middlewares/asyncHandler"));
const cart_service_1 = require("../services/cart.service");
exports.addToCart = (0, asyncHandler_1.default)(async (req, res) => {
    const { productId, quantity } = req.body;
    const cart = await (0, cart_service_1.addToCartService)(req.user._id, productId, quantity);
    res.status(200).json({ success: true, cart });
});
exports.getCart = (0, asyncHandler_1.default)(async (req, res) => {
    const cart = await (0, cart_service_1.getCartService)(req.user._id);
    res.status(200).json({ success: true, cart });
});
exports.removeFromCart = (0, asyncHandler_1.default)(async (req, res) => {
    const productId = req.params.productId;
    const cart = await (0, cart_service_1.removeFromCartService)(req.user._id, productId);
    res.status(200).json({ success: true, cart });
});
exports.clearCart = (0, asyncHandler_1.default)(async (req, res) => {
    const cart = await (0, cart_service_1.clearCartService)(req.user._id);
    res.status(200).json({ success: true, cart });
});
exports.updateQuantity = (0, asyncHandler_1.default)(async (req, res) => {
    const { productId, quantity } = req.body;
    const cart = await (0, cart_service_1.updateQuantityService)(req.user._id, productId, quantity);
    res.status(200).json({
        success: true,
        cart,
    });
});
