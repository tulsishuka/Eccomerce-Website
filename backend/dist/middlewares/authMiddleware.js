"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminMiddleware = exports.protectedMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const asyncHandler_1 = __importDefault(require("./asyncHandler"));
const userModel_1 = require("../models/userModel");
exports.protectedMiddleware = (0, asyncHandler_1.default)(async (req, res, next) => {
    let token = req.cookies?.jwt || req.headers.authorization?.split(" ")[1];
    if (!token) {
        res.status(401);
        throw new Error("Access denied! Token not found.");
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = await userModel_1.User.findById(decoded.id).select("-password");
        return next();
    }
    catch (error) {
        res.status(401);
        throw new Error("Access denied! Token is invalid or expired.");
    }
});
const adminMiddleware = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        next();
    }
    else {
        res.status(401);
        throw new Error("Access denied! You are not an admin.");
    }
};
exports.adminMiddleware = adminMiddleware;
