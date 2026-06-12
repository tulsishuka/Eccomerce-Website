
import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import asyncHandler from "./asyncHandler";
import { User } from "../models/userModel";

// import { IUser } from "../interfaces/user.interface";

// export interface AuthRequest extends Request {
//   user?: IUser;
// }

interface AuthRequest extends Request {
  user?: any;
}

export const protectedMiddleware = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    let token =
      req.cookies?.jwt || req.headers.authorization?.split(" ")[1];

    if (!token) {
      res.status(401);
      throw new Error("Access denied! Token not found.");
    }

    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as JwtPayload;

      req.user = await User.findById(decoded.id).select("-password");

      return next();
    } catch (error) {
      res.status(401);
      throw new Error("Access denied! Token is invalid or expired.");
    }
  }
);

export const adminMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(401);
    throw new Error("Access denied! You are not an admin.");
  }
};