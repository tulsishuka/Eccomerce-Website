import mongoose, { Schema } from "mongoose";
import { IOrder, ISingleProduct } from "../interfaces/order.interface";

const singleProductSchema = new Schema<ISingleProduct>({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
    required: true,
  },
});

const orderSchema = new Schema<IOrder>({
  total: {
    type: Number,
    required: [true, "Total price must be provided"],
  },

  status: {
    type: String,
    enum: ["pending", "success", "failed"],
    default: "pending",
  },

  itemDetail: [singleProductSchema],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },

  firstName: {
    type: String,
    required: [true, "First name must be provided"],
  },

  lastName: {
    type: String,
  },

  phone: {
    type: String,
    required: [true, "Phone number must be provided"],
  },

  email: {
    type: String,
    required: [true, "Email must be provided"],
  },
});

const Order = mongoose.model<IOrder>("Order", orderSchema);

export default Order;