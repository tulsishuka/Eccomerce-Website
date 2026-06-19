"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../middlewares/authMiddleware");
const productController_1 = require("../controllers/productController");
const uploadFileHandler_1 = require("../utils/uploadFileHandler");
const router = express_1.default.Router();
router.post("/", authMiddleware_1.protectedMiddleware, authMiddleware_1.adminMiddleware, productController_1.createProduct);
router.get("/", productController_1.getProducts);
router.get("/:id", productController_1.detailProduct);
router.put("/:id", authMiddleware_1.protectedMiddleware, authMiddleware_1.adminMiddleware, productController_1.updateProduct);
router.delete("/:id", authMiddleware_1.protectedMiddleware, authMiddleware_1.adminMiddleware, productController_1.deleteProduct);
router.post("/file-upload", authMiddleware_1.protectedMiddleware, authMiddleware_1.adminMiddleware, uploadFileHandler_1.upload.single("image"), productController_1.fileUpload);
exports.default = router;
