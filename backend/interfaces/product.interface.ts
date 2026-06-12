import { Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  price: number;
  description: string;
  image?: string;
  category: "sepatu" | "baju" | "celana";
  stock: number;
}