
import { Types } from "mongoose";
import Cart from "../models/cart.model";

// Add product to cart
export const addToCartService = async (
  userId: string,
  productId: string,
  quantity: number = 1
) => {
  let cart = await Cart.findOne({ user: userId });

  if (!cart) {
    cart = await Cart.create({
      user: userId,
      items: [],
    });
  }

  const itemIndex = cart.items.findIndex(
    (item: any) => item.product.toString() === productId
  );

  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += quantity;
  } else {
    cart.items.push({
      product: new Types.ObjectId(productId),
      quantity,
    });
  }

  await cart.save();

  return await Cart.findById(cart._id).populate("items.product");
};

// Get cart
export const getCartService = async (userId: string) => {
  return await Cart.findOne({ user: userId }).populate("items.product");
};


export const removeFromCartService = async (
  userId: string,
  productId: string
) => {
  const cart = await Cart.findOne({
    user: userId,
  });

  if (!cart) {
    throw new Error("Cart not found");
  }

  cart.items = cart.items.filter(
    (item: any) =>
      item.product.toString() !== productId
  );

  await cart.save();

  return await Cart.findOne({
    user: userId,
  }).populate("items.product");
};

// Clear cart
export const clearCartService = async (userId: string) => {
  const cart = await Cart.findOne({ user: userId });

  if (!cart) {
    throw new Error("Cart not found");
  }

  cart.items = [];

  await cart.save();

  return cart;
};



//////////////////


export const updateQuantityService = async (
  userId: string,
  productId: string,
  quantity: number
) => {
  const cart = await Cart.findOne({
    user: userId,
  });

  if (!cart) {
    throw new Error("Cart not found");
  }

  const item = cart.items.find(
    (item: any) =>
      item.product.toString() === productId
  );

  if (!item) {
    throw new Error("Item not found");
  }

  item.quantity = quantity;

  await cart.save();

  return await Cart.findOne({
    user: userId,
  }).populate("items.product");
};