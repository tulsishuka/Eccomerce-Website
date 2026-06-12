

import { Request, Response } from "express";
import asyncHandler from "../middlewares/asyncHandler";
import {
  createOrderService,
  getAllOrdersService,
  getOrderDetailService,
  getCurrentUserOrdersService,
} from "../services/order.service";

interface AuthRequest extends Request {
  user?: any;
}

export const CreateOrder = asyncHandler(
  async (req: AuthRequest, res: Response): Promise<void> => {

    const result = await createOrderService(req.body, req.user?._id);

    res.status(201).json({
      total: result.total,
      order: result.order,
      message: "Order added successfully!",
    });
  }
);

export const AllOrder = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {

    const orders = await getAllOrdersService();

    res.status(200).json({
      data: orders,
      message: "All orders displayed successfully!",
    });
  }
);


export const DetailOrder = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {

    const order = await getOrderDetailService(req.params.id as string);

    res.status(200).json({
      data: order,
      message: "Order details displayed successfully!",
    });
  }
);

export const CurrentUserOrder = asyncHandler(
  async (req: AuthRequest, res: Response): Promise<void> => {

    const order = await getCurrentUserOrdersService(req.user?._id);

    res.status(200).json({
      data: order,
      message: "Current user orders displayed successfully!",
    });
  }
);