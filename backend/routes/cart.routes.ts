import { Router } from "express";
import { addToCart, getCart, removeFromCart, clearCart } from "../controllers/cart.controller";
import { protectedMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.use(protectedMiddleware); // All cart routes require login

router.post("/", addToCart);             // Add product
router.get("/", getCart);                // Get cart
router.delete("/clear", clearCart);      // Clear cart
router.delete("/:productId", removeFromCart); // Remove item

export default router;