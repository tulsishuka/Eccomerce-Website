import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;

  role: "user" | "admin";   // ✅ better than boolean

  otp?: string;
  otpExpires?: Date;
  isVerified: boolean;

  resetToken?: string;
  resetTokenExpires?: Date;
}