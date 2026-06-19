"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgot = exports.login = exports.verify = exports.register = void 0;
const authService = __importStar(require("../services/auth.service"));
const generateToken_1 = require("../utils/generateToken");
const sendEmail_1 = require("../utils/sendEmail");
const asyncHandler_1 = __importDefault(require("../middlewares/asyncHandler"));
/**
 * @desc Register user and send OTP
 */
exports.register = (0, asyncHandler_1.default)(async (req, res) => {
    const user = await authService.registerUser(req.body);
    await (0, sendEmail_1.sendEmail)(user.email, "Verify your account", `Your OTP for account verification is: ${user.otp}`);
    res.status(201).json({
        success: true,
        message: "Registered successfully. Check email for OTP.",
    });
});
/**
 * @desc Verify account using OTP
 */
exports.verify = (0, asyncHandler_1.default)(async (req, res) => {
    const { email, otp } = req.body;
    await authService.verifyOtp(email, otp);
    res.status(200).json({
        success: true,
        message: "Account verified successfully",
    });
});
exports.login = (0, asyncHandler_1.default)(async (req, res) => {
    const { email, password } = req.body;
    const result = await authService.loginUser(email, password);
    // User not verified
    if (typeof result === "object" &&
        "requiresVerification" in result) {
        return res.status(200).json({
            success: false,
            requiresVerification: true,
            email: result.email,
            message: "Please verify your email",
        });
    }
    const token = (0, generateToken_1.generateToken)(result._id.toString(), result.role);
    return res.status(200).json({
        success: true,
        token,
        user: {
            name: result.name,
            email: result.email,
            role: result.role,
            _id: result._id,
        },
        message: "Login successful",
    });
});
/**
 * @desc Reset password using old password
 */
exports.forgot = (0, asyncHandler_1.default)(async (req, res) => {
    const { email, oldPassword, newPassword } = req.body;
    await authService.resetPasswordWithOld(email, oldPassword, newPassword);
    res.status(200).json({
        success: true,
        message: "Password updated successfully.",
    });
});
