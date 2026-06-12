
import express from "express";
import authRouter from "./routes/authRouter";
import productRouter from "./routes/productRouter";
import orderRouter from "./routes/orderRouter";
import cartRouter from "./routes/cart.routes";
import cors from "cors";
import path from "path";


const app = express();

app.use(express.json());

app.use(cors());
 app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/cart", cartRouter);

export default app;
