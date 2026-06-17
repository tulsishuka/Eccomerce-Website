import { Router } from "express";

import {
  addAddress,
  getAddress,
  updateAddress,
} from "../controllers/address.controller";

import { protectedMiddleware }
from "../middlewares/authMiddleware";

const router = Router();

router.use(protectedMiddleware);

router.post("/", addAddress);

router.get("/", getAddress);

router.put("/", updateAddress);

export default router;