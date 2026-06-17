import { Request, Response } from "express";
import asyncHandler from "../middlewares/asyncHandler";

import {
  addAddressService,
  getAddressService,
  updateAddressService,
} from "../services/address.service";

interface AuthRequest extends Request {
  user?: any;
}

export const addAddress = asyncHandler(
  async (
    req: AuthRequest,
    res: Response
  ) => {
    const address =
      await addAddressService(
        req.user._id,
        req.body
      );

    res.status(201).json({
      success: true,
      address,
    });
  }
);

export const getAddress = asyncHandler(
  async (
    req: AuthRequest,
    res: Response
  ) => {
    const address =
      await getAddressService(
        req.user._id
      );

    res.status(200).json({
      success: true,
      address,
    });
  }
);

export const updateAddress = asyncHandler(
  async (
    req: AuthRequest,
    res: Response
  ) => {
    const address =
      await updateAddressService(
        req.user._id,
        req.body
      );

    res.status(200).json({
      success: true,
      address,
    });
  }
);