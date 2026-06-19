"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cart_controller_1 = require("../controllers/cart.controller");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
router.use(authMiddleware_1.protectedMiddleware); // All cart routes require login
router.post("/", cart_controller_1.addToCart); // Add product
router.get("/", cart_controller_1.getCart); // Get cart
router.delete("/clear", cart_controller_1.clearCart); // Clear cart
router.delete("/:productId", cart_controller_1.removeFromCart); // Remove item
router.put("/quantity", cart_controller_1.updateQuantity);
exports.default = router;
