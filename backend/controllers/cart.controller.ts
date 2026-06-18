import { Request, Response } from "express";
import asyncHandler from "../middlewares/asyncHandler";
import {
  addToCartService,
  getCartService,
  removeFromCartService,
  clearCartService,
  updateQuantityService,
} from "../services/cart.service";

interface AuthRequest extends Request {
  user?: any;
}

export const addToCart = asyncHandler(async (req: AuthRequest, res: Response) => {
  const { productId, quantity } = req.body;
  const cart = await addToCartService(req.user._id, productId, quantity);
  res.status(200).json({ success: true, cart });
});

export const getCart = asyncHandler(async (req: AuthRequest, res: Response) => {
  const cart = await getCartService(req.user._id);
  res.status(200).json({ success: true, cart });
});

export const removeFromCart = asyncHandler(async (req: AuthRequest, res: Response) => {

const productId = req.params.productId as string;

const cart = await removeFromCartService(req.user._id, productId);
  res.status(200).json({ success: true, cart });
});

export const clearCart = asyncHandler(async (req: AuthRequest, res: Response) => {
  const cart = await clearCartService(req.user._id);
  res.status(200).json({ success: true, cart });
});




export const updateQuantity = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const { productId, quantity } = req.body;

    const cart = await updateQuantityService(
      req.user._id,
      productId,
      quantity
    );

    res.status(200).json({
      success: true,
      cart,
    });
  }
);