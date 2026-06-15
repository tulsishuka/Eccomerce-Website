import { Request, Response } from "express";
import * as authService from "../services/auth.service";
import { generateToken } from "../utils/generateToken";
import { sendEmail } from "../utils/sendEmail";
import asyncHandler from "../middlewares/asyncHandler";

/**
 * @desc Register user and send OTP
 */
export const register = asyncHandler(async (req: Request, res: Response) => {
  const user = await authService.registerUser(req.body);

  await sendEmail(
    user.email,
    "Verify your account",
    `Your OTP for account verification is: ${user.otp}`
  );

  res.status(201).json({
    success: true,
    message: "Registered successfully. Check email for OTP.",
  });
});

/**
 * @desc Verify account using OTP
 */
export const verify = asyncHandler(async (req: Request, res: Response) => {
  const { email, otp } = req.body;

  await authService.verifyOtp(email, otp);

  res.status(200).json({
    success: true,
    message: "Account verified successfully",
  });
});



export const login = asyncHandler(
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const result = await authService.loginUser(
      email,
      password
    );

    // User not verified
    if (
      typeof result === "object" &&
      "requiresVerification" in result
    ) {
      return res.status(200).json({
        success: false,
        requiresVerification: true,
        email: result.email,
        message: "Please verify your email",
      });
    }

    const token = generateToken(
      result._id.toString(),
      result.role
    );

    return res.status(200).json({
      success: true,
      token,
      user: {
        name: result.name,
        email: result.email,
        role: result.role,
      },
      message: "Login successful",
    });
  }
);

/**
 * @desc Reset password using old password
 */
export const forgot = asyncHandler(async (req: Request, res: Response) => {
  const { email, oldPassword, newPassword } = req.body;

  await authService.resetPasswordWithOld(email, oldPassword, newPassword);

  res.status(200).json({
    success: true,
    message: "Password updated successfully.",
  });
});