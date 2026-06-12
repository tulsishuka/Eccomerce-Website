import Product from "../models/productModel";
import mongoose from "mongoose";

export const createProductService = async (data: any) => {
  const product = await Product.create(data);
  return product;
};

export const getProductsService = async (query: any) => {
  const queryObj: any = { ...query };

  const excludeFields = ["page", "limit", "name"];
  excludeFields.forEach((field) => delete queryObj[field]);

  let filter: any = queryObj;

  if (query.name) {
    filter = {
      name: { $regex: query.name, $options: "i" },
    };
  }

  let dbQuery = Product.find(filter);

  const totalProducts = await Product.countDocuments(filter);

  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 30;

  const skip = (page - 1) * limit;

  dbQuery = dbQuery.skip(skip).limit(limit);

  if (query.page && skip >= totalProducts) {
    throw new Error("This page does not exist!");
  }

  const products = await dbQuery;

  return {
    total: totalProducts,
    data: products,
  };
};

export const getProductByIdService = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid product ID!");
  }

  const product = await Product.findById(id);

  if (!product) {
    throw new Error("Product not found!");
  }

  return product;
};

export const updateProductService = async (id: string, data: any) => {
  const product = await Product.findByIdAndUpdate(id, data, {
    runValidators: false,
    new: true,
  });

  return product;
};

export const deleteProductService = async (id: string) => {
  const product = await Product.findByIdAndDelete(id);

  return product;
};