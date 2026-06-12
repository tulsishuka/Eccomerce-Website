
import express from "express";
import {
  protectedMiddleware,
  adminMiddleware,
} from "../middlewares/authMiddleware";

import {
  AllOrder,
  CreateOrder,
  CurrentUserOrder,
  DetailOrder,
} from "../controllers/orderController";

const router = express.Router();

router.post("/", protectedMiddleware, CreateOrder);

router.get("/current/user", protectedMiddleware, CurrentUserOrder);

router.get("/", protectedMiddleware, adminMiddleware, AllOrder);

router.get("/:id", protectedMiddleware, adminMiddleware, DetailOrder);

export default router;