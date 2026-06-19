"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeWishlist = exports.getWishlist = exports.addWishlist = void 0;
const wishlistModel_1 = require("../models/wishlistModel");
const addWishlist = async (req, res) => {
    const { userId, productId } = req.body;
    const exists = await wishlistModel_1.Wishlist.findOne({
        user: userId,
        product: productId,
    });
    if (exists) {
        return res.json({
            success: false,
            message: "Already in wishlist",
        });
    }
    const wishlist = await wishlistModel_1.Wishlist.create({
        user: userId,
        product: productId,
    });
    res.json({
        success: true,
        wishlist,
    });
};
exports.addWishlist = addWishlist;
const getWishlist = async (req, res) => {
    const wishlist = await wishlistModel_1.Wishlist.find({
        user: req.params.userId,
    }).populate("product");
    res.json({
        success: true,
        data: wishlist,
    });
};
exports.getWishlist = getWishlist;
const removeWishlist = async (req, res) => {
    await wishlistModel_1.Wishlist.findByIdAndDelete(req.params.id);
    res.json({
        success: true,
        message: "Removed",
    });
};
exports.removeWishlist = removeWishlist;
