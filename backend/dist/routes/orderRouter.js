"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../middlewares/authMiddleware");
const orderController_1 = require("../controllers/orderController");
const router = express_1.default.Router();
router.post("/", authMiddleware_1.protectedMiddleware, orderController_1.CreateOrder);
router.get("/current/user", authMiddleware_1.protectedMiddleware, orderController_1.CurrentUserOrder);
router.get("/", authMiddleware_1.protectedMiddleware, authMiddleware_1.adminMiddleware, orderController_1.AllOrder);
router.get("/:id", authMiddleware_1.protectedMiddleware, authMiddleware_1.adminMiddleware, orderController_1.DetailOrder);
exports.default = router;
