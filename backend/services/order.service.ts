import Product from "../models/productModel";
import Order from "../models/orderModel";

export const createOrderService = async (data: any, userId: string) => {
  const { email, firstName, lastName, phone, cartItem } = data;

  let orderItem: any[] = [];
  let total = 0;

  for (const cart of cartItem) {
    const productData = await Product.findOne({ _id: cart.product });

    if (!productData) {
      throw new Error("Product ID not found!");
    }

    const { name, price, _id } = productData as any;

    const singleProduct = {
      quantity: cart.quantity,
      name,
      price,
      product: _id,
    };

    orderItem = [...orderItem, singleProduct];

    total += cart.quantity * price;
  }

  const order = await Order.create({
    itemDetail: orderItem,
    total,
    firstName,
    lastName,
    email,
    phone,
    user: userId,
  });

  return { order, total };
};

export const getAllOrdersService = async () => {
  return Order.find();
};

export const getOrderDetailService = async (id: string) => {
  return Order.findById(id);
};

export const getCurrentUserOrdersService = async (userId: string) => {
  return Order.find({ user: userId });
};