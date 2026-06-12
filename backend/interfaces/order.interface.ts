import { Document, Types } from "mongoose";

export interface ISingleProduct {
  name: string;
  quantity: number;
  price: number;
  product: Types.ObjectId;
}

export interface IOrder extends Document {
  total: number;
  status: "pending" | "success" | "failed";
  itemDetail: ISingleProduct[];
  user: Types.ObjectId;
  firstName: string;
  lastName?: string;
  phone: string;
  email: string;
}