
import express from "express";
import {
  protectedMiddleware,
  adminMiddleware,
} from "../middlewares/authMiddleware";

import {
  createProduct,
  getProducts,
  detailProduct,
  deleteProduct,
  updateProduct,
  fileUpload,
} from "../controllers/productController";

import { upload } from "../utils/uploadFileHandler";

const router = express.Router();

router.post("/", protectedMiddleware, adminMiddleware, createProduct);

router.get("/", getProducts);

router.get("/:id", detailProduct);

router.put("/:id", protectedMiddleware, adminMiddleware, updateProduct);

router.delete("/:id", protectedMiddleware, adminMiddleware, deleteProduct);

router.post(
  "/file-upload",
  protectedMiddleware,
  adminMiddleware,
  upload.single("image"),
  fileUpload
);

export default router;