"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentUserOrdersService = exports.getOrderDetailService = exports.getAllOrdersService = exports.createOrderService = void 0;
const productModel_1 = __importDefault(require("../models/productModel"));
const orderModel_1 = __importDefault(require("../models/orderModel"));
const createOrderService = async (data, userId) => {
    const { email, firstName, lastName, phone, itemDetail, } = data;
    if (!itemDetail || itemDetail.length === 0) {
        throw new Error("No products found in order");
    }
    let orderItems = [];
    let total = 0;
    for (const item of itemDetail) {
        const productData = await productModel_1.default.findById(item.product);
        if (!productData) {
            throw new Error(`Product not found: ${item.product}`);
        }
        orderItems.push({
            quantity: item.quantity,
            name: productData.name,
            price: productData.price,
            product: productData._id,
        });
        total +=
            Number(productData.price) *
                Number(item.quantity);
    }
    const order = await orderModel_1.default.create({
        itemDetail: orderItems,
        total,
        firstName,
        lastName,
        email,
        phone,
        user: userId,
        status: "success",
    });
    return {
        order,
        total,
    };
};
exports.createOrderService = createOrderService;
const getAllOrdersService = async () => {
    return await orderModel_1.default.find()
        .populate("user")
        .sort({ createdAt: -1 });
};
exports.getAllOrdersService = getAllOrdersService;
const getOrderDetailService = async (id) => {
    return await orderModel_1.default.findById(id)
        .populate("user")
        .populate("itemDetail.product");
};
exports.getOrderDetailService = getOrderDetailService;
const getCurrentUserOrdersService = async (userId) => {
    return await orderModel_1.default.find({
        user: userId,
    })
        .populate("itemDetail.product")
        .sort({ createdAt: -1 });
};
exports.getCurrentUserOrdersService = getCurrentUserOrdersService;
