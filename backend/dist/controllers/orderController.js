"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUserOrder = exports.DetailOrder = exports.AllOrder = exports.CreateOrder = void 0;
const asyncHandler_1 = __importDefault(require("../middlewares/asyncHandler"));
const order_service_1 = require("../services/order.service");
exports.CreateOrder = (0, asyncHandler_1.default)(async (req, res) => {
    const result = await (0, order_service_1.createOrderService)(req.body, req.user?._id);
    res.status(201).json({
        total: result.total,
        order: result.order,
        message: "Order added successfully!",
    });
});
exports.AllOrder = (0, asyncHandler_1.default)(async (req, res) => {
    const orders = await (0, order_service_1.getAllOrdersService)();
    res.status(200).json({
        data: orders,
        message: "All orders displayed successfully!",
    });
});
exports.DetailOrder = (0, asyncHandler_1.default)(async (req, res) => {
    const order = await (0, order_service_1.getOrderDetailService)(req.params.id);
    res.status(200).json({
        data: order,
        message: "Order details displayed successfully!",
    });
});
exports.CurrentUserOrder = (0, asyncHandler_1.default)(async (req, res) => {
    const order = await (0, order_service_1.getCurrentUserOrdersService)(req.user?._id);
    res.status(200).json({
        data: order,
        message: "Current user orders displayed successfully!",
    });
});
