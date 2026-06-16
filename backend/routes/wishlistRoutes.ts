import { Router } from "express";
import { addWishlist, getWishlist, removeWishlist } from "../controllers/wishlistController";

const router = Router();

router.post("/add", addWishlist);
router.get("/:userId", getWishlist);
router.delete("/:id", removeWishlist);

export default router;