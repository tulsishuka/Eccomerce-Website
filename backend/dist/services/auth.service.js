"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordWithOld = exports.loginUser = exports.verifyOtp = exports.registerUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const crypto_1 = __importDefault(require("crypto"));
const AppError_1 = require("../utils/AppError");
const userModel_1 = require("../models/userModel");
const sendEmail_1 = require("../utils/sendEmail");
const registerUser = async (data) => {
    const existing = await userModel_1.User.findOne({ email: data.email });
    if (existing)
        throw new AppError_1.AppError("User already exists", 400);
    const hashedPassword = await bcryptjs_1.default.hash(data.password, 12);
    // Generate strong 6-digit OTP
    const otp = crypto_1.default.randomInt(100000, 1000000).toString();
    const user = await userModel_1.User.create({
        name: data.name,
        email: data.email,
        password: hashedPassword,
        otp,
        otpExpires: new Date(Date.now() + 10 * 60 * 1000), // 10 min
        isVerified: false,
    });
    return user;
};
exports.registerUser = registerUser;
const verifyOtp = async (email, otp) => {
    const user = await userModel_1.User.findOne({ email });
    if (!user) {
        throw new AppError_1.AppError("User not found", 404);
    }
    console.log("============== OTP DEBUG ==============");
    console.log("Email:", email);
    console.log("DB OTP:", user.otp);
    console.log("Entered OTP:", otp);
    console.log("Expires:", user.otpExpires);
    console.log("=======================================");
    if (String(user.otp) !== String(otp)) {
        throw new AppError_1.AppError("Invalid OTP", 400);
    }
    if (user.otpExpires &&
        user.otpExpires < new Date()) {
        throw new AppError_1.AppError("OTP expired", 400);
    }
    user.isVerified = true;
    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save();
    return user;
};
exports.verifyOtp = verifyOtp;
const loginUser = async (email, password) => {
    const user = await userModel_1.User.findOne({ email });
    if (!user) {
        throw new AppError_1.AppError("User not found", 404);
    }
    const match = await bcryptjs_1.default.compare(password, user.password);
    if (!match) {
        throw new AppError_1.AppError("Invalid password", 401);
    }
    // User not verified
    if (!user.isVerified) {
        const otp = crypto_1.default
            .randomInt(100000, 1000000)
            .toString();
        user.otp = otp;
        user.otpExpires = new Date(Date.now() + 10 * 60 * 1000);
        await user.save();
        await (0, sendEmail_1.sendEmail)(user.email, "Verify your account", `Your OTP for account verification is: ${otp}`);
        return {
            requiresVerification: true,
            email: user.email,
        };
    }
    return user;
};
exports.loginUser = loginUser;
// Reset password using old password (no OTP)
const resetPasswordWithOld = async (email, oldPassword, newPassword) => {
    const user = await userModel_1.User.findOne({ email });
    if (!user)
        throw new AppError_1.AppError("User not found", 404);
    const match = await bcryptjs_1.default.compare(oldPassword, user.password);
    if (!match)
        throw new AppError_1.AppError("Old password is incorrect", 400);
    user.password = await bcryptjs_1.default.hash(newPassword, 12);
    await user.save();
};
exports.resetPasswordWithOld = resetPasswordWithOld;
