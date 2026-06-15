import bcrypt from "bcryptjs";
import crypto from "crypto";
import { AppError } from "../utils/AppError";
import { User } from "../models/userModel";
import { sendEmail } from "../utils/sendEmail";



export const registerUser = async (data: any) => {
  const existing = await User.findOne({ email: data.email });
  if (existing) throw new AppError("User already exists", 400);

  const hashedPassword = await bcrypt.hash(data.password, 12);

  // Generate strong 6-digit OTP
  const otp = crypto.randomInt(100000, 1000000).toString();

  const user = await User.create({
    name: data.name,
    email: data.email,
    password: hashedPassword,
    otp,
    otpExpires: new Date(Date.now() + 10 * 60 * 1000), // 10 min
    isVerified: false,
  });

  return user;
};



export const verifyOtp = async (
  email: string,
  otp: string
) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  console.log("============== OTP DEBUG ==============");
  console.log("Email:", email);
  console.log("DB OTP:", user.otp);
  console.log("Entered OTP:", otp);
  console.log("Expires:", user.otpExpires);
  console.log("=======================================");

  if (String(user.otp) !== String(otp)) {
    throw new AppError("Invalid OTP", 400);
  }

  if (
    user.otpExpires &&
    user.otpExpires < new Date()
  ) {
    throw new AppError("OTP expired", 400);
  }

  user.isVerified = true;
  user.otp = undefined;
  user.otpExpires = undefined;

  await user.save();

  return user;
};




export const loginUser = async (
  email: string,
  password: string
) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const match = await bcrypt.compare(
    password,
    user.password
  );

  if (!match) {
    throw new AppError("Invalid password", 401);
  }

  // User not verified
  if (!user.isVerified) {
    const otp = crypto
      .randomInt(100000, 1000000)
      .toString();

    user.otp = otp;
    user.otpExpires = new Date(
      Date.now() + 10 * 60 * 1000
    );

    await user.save();

    await sendEmail(
      user.email,
      "Verify your account",
      `Your OTP for account verification is: ${otp}`
    );

    return {
      requiresVerification: true,
      email: user.email,
    };
  }

  return user;
};

// Reset password using old password (no OTP)
export const resetPasswordWithOld = async (email: string, oldPassword: string, newPassword: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new AppError("User not found", 404);

  const match = await bcrypt.compare(oldPassword, user.password);
  if (!match) throw new AppError("Old password is incorrect", 400);

  user.password = await bcrypt.hash(newPassword, 12);
  await user.save();
};