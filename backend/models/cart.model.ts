import { Schema, model, Types, Document } from "mongoose";

interface ICartItem {
  product: Types.ObjectId;  // Product reference
  quantity: number;
}

export interface ICart extends Document {
  user: Types.ObjectId;        // User reference
  items: ICartItem[];          // Array of cart items
}

const cartSchema = new Schema<ICart>({
  user: { type: Types.ObjectId, ref: "User", required: true },
  items: [
    {
      product: { type: Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true, min: 1 },
    },
  ],
});

export default model<ICart>("Cart", cartSchema);