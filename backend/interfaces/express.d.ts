import { IUser } from "./user.interface"; // your User interface

declare global {
  namespace Express {
    interface Request {
      user?: IUser; // TypeScript now knows req.user exists
    }
  }
}