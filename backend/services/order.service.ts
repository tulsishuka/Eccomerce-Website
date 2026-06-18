

import Product from "../models/productModel";
import Order from "../models/orderModel";

export const createOrderService = async (
  data: any,
  userId: string
) => {
  const {
    email,
    firstName,
    lastName,
    phone,
    itemDetail,
  } = data;

  if (!itemDetail || itemDetail.length === 0) {
    throw new Error("No products found in order");
  }

  let orderItems: any[] = [];
  let total = 0;

  for (const item of itemDetail) {
    const productData = await Product.findById(
      item.product
    );

    if (!productData) {
      throw new Error(
        `Product not found: ${item.product}`
      );
    }

    orderItems.push({
      quantity: item.quantity,
      name: productData.name,
      price: productData.price,
      product: productData._id,
    });

    total +=
      Number(productData.price) *
      Number(item.quantity);
  }

  const order = await Order.create({
    itemDetail: orderItems,
    total,
    firstName,
    lastName,
    email,
    phone,
    user: userId,
    status: "success",
  });

  return {
    order,
    total,
  };
};

export const getAllOrdersService = async () => {
  return await Order.find()
    .populate("user")
    .sort({ createdAt: -1 });
};

export const getOrderDetailService = async (
  id: string
) => {
  return await Order.findById(id)
    .populate("user")
    .populate("itemDetail.product");
};

export const getCurrentUserOrdersService =
  async (userId: string) => {
    return await Order.find({
      user: userId,
    })
      .populate("itemDetail.product")
      .sort({ createdAt: -1 });
  };