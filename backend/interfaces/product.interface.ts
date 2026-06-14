import { Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  price: number;
  description: string;
  image?: string;
  category: "men" | "women" ;
  stock: number;
}