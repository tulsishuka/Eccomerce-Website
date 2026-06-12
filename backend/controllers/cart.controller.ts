import { Request, Response } from "express";
import asyncHandler from "../middlewares/asyncHandler";
import {
  addToCartService,
  getCartService,
  removeFromCartService,
  clearCartService,
} from "../services/cart.service";

interface AuthRequest extends Request {
  user?: any;
}

// Add product to cart
export const addToCart = asyncHandler(async (req: AuthRequest, res: Response) => {
  const { productId, quantity } = req.body;
  const cart = await addToCartService(req.user._id, productId, quantity);
  res.status(200).json({ success: true, cart });
});

// Get user cart
export const getCart = asyncHandler(async (req: AuthRequest, res: Response) => {
  const cart = await getCartService(req.user._id);
  res.status(200).json({ success: true, cart });
});

// Remove product from cart
export const removeFromCart = asyncHandler(async (req: AuthRequest, res: Response) => {
//   const { productId } = req.params;
//   const cart = await removeFromCartService(req.user._id, productId);
const productId = req.params.productId as string;

const cart = await removeFromCartService(req.user._id, productId);
  res.status(200).json({ success: true, cart });
});

// Clear cart
export const clearCart = asyncHandler(async (req: AuthRequest, res: Response) => {
  const cart = await clearCartService(req.user._id);
  res.status(200).json({ success: true, cart });
});