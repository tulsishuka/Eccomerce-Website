// import Product from "../models/productModel";
import { Types } from "mongoose";
import Cart from "../models/cart.model";
// Add product to cart
export const addToCartService = async (userId: string, productId: string, quantity: number) => {
  let cart = await Cart.findOne({ user: userId });

  if (!cart) {
    // Create a cart if none exists
    cart = await Cart.create({ user: userId, items: [] });
  }


const itemIndex = cart.items.findIndex((item: any) => item.product.toString() === productId);
  if (itemIndex > -1) {
    // If exists, increase quantity
    cart.items[itemIndex].quantity += quantity;
  } else {
    // Otherwise, add new item
    cart.items.push({ product: new Types.ObjectId(productId), quantity });
  }

  await cart.save();
  return cart;
};

// Get cart for user
export const getCartService = async (userId: string) => {
  const cart = await Cart.findOne({ user: userId }).populate("items.product");
  return cart;
};

// Remove product from cart
export const removeFromCartService = async (userId: string, productId: string) => {
  const cart = await Cart.findOne({ user: userId });
  if (!cart) throw new Error("Cart not found");
const itemIndex = cart.items.findIndex((item: any) => item.product.toString() === productId);
//   cart.items = cart.items.filter(item => item.product.toString() !== productId);
  await cart.save();
  return cart;
};

// Clear cart (after order placed)
export const clearCartService = async (userId: string) => {
  const cart = await Cart.findOne({ user: userId });
  if (cart) {
    cart.items = [];
    await cart.save();
  }
  return cart;
};