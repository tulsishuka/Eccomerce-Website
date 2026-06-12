
import { Request, Response, NextFunction } from "express";
import asyncHandler from "../middlewares/asyncHandler";
import Product from "../models/productModel";
import mongoose from "mongoose";


export const createProduct = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const newProduct = await Product.create(req.body);

    res.status(201).json({
      message: "Product added successfully!",
      data: newProduct,
    });
  }
);


export const getProducts = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const queryObj: any = { ...req.query };

    const excludeFields = ["page", "limit", "name"];
    excludeFields.forEach((field) => delete queryObj[field]);

    let filter: any = queryObj;

    if (req.query.name) {
      filter = {
        name: { $regex: req.query.name, $options: "i" },
      };
    }

    let query = Product.find(filter);

    const totalProducts = await Product.countDocuments(filter);

    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 30;
    const skip = (page - 1) * limit;

    query = query.skip(skip).limit(limit);

    if (req.query.page && skip >= totalProducts) {
      res.status(404).json({ message: "This page does not exist!" });
      return;
    }

    const data = await query;

    res.status(200).json({
      message: "Displaying products",
      total: totalProducts,
      data,
    });
  }
);

export const detailProduct = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {

    const id = req.params.id as string;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: "Invalid product ID!" });
      return;
    }

    const product = await Product.findById(id);

    if (!product) {
      res.status(404).json({ message: "Product not found!" });
      return;
    }

    res.status(200).json({
      message: "Product details displayed successfully",
      data: product,
    });
  }
);

export const updateProduct = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {

    const paramId = req.params.id as string;

    const updatedProduct = await Product.findByIdAndUpdate(
      paramId,
      req.body,
      {
        runValidators: false,
        new: true,
      }
    );

    res.status(201).json({
      message: "Product updated successfully!",
      data: updatedProduct,
    });
  }
);

export const deleteProduct = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {

    const paramId = req.params.id as string;

    const deletedProduct = await Product.findByIdAndDelete(paramId);

    res.status(200).json({
      message: "Product deleted successfully!",
      data: deletedProduct,
    });
  }
);

/*
FILE UPLOAD
*/
export const fileUpload = asyncHandler(
  async (req: Request & { file?: any }, res: Response): Promise<void> => {

    const file = req.file;

    if (!file) {
      res.status(400);
      throw new Error("No file uploaded");
    }

    const imageFileName = file.filename;
    const pathImageFile = `uploads/${imageFileName}`;

    res.status(200).json({
      message: "Image uploaded successfully",
      image: pathImageFile,
    });
  }
);