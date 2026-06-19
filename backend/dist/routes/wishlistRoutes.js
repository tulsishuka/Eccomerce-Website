"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const wishlistController_1 = require("../controllers/wishlistController");
const router = (0, express_1.Router)();
router.post("/add", wishlistController_1.addWishlist);
router.get("/:userId", wishlistController_1.getWishlist);
router.delete("/:id", wishlistController_1.removeWishlist);
exports.default = router;
