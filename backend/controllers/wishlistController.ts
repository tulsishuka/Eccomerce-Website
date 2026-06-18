import { Request, Response } from "express";
import { Wishlist } from "../models/wishlistModel";

export const addWishlist = async (
  req: Request,
  res: Response
) => {
  const { userId, productId } = req.body;

  const exists = await Wishlist.findOne({
    user: userId,
    product: productId,
  });

  if (exists) {
    return res.json({
      success: false,
      message: "Already in wishlist",
    });
  }

  const wishlist = await Wishlist.create({
    user: userId,
    product: productId,
  });

  res.json({
    success: true,
    wishlist,
  });
};

export const getWishlist = async (
  req: Request,
  res: Response
) => {
  const wishlist = await Wishlist.find({
    user: req.params.userId,
  }).populate("product");

  res.json({
    success: true,
    data: wishlist,
  });
};



export const removeWishlist = async (
  req: Request,
  res: Response
) => {
  await Wishlist.findByIdAndDelete(
    req.params.id
  );

  res.json({
    success: true,
    message: "Removed",
  });
};