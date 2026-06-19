"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAddress = exports.getAddress = exports.addAddress = void 0;
const asyncHandler_1 = __importDefault(require("../middlewares/asyncHandler"));
const address_service_1 = require("../services/address.service");
exports.addAddress = (0, asyncHandler_1.default)(async (req, res) => {
    const address = await (0, address_service_1.addAddressService)(req.user._id, req.body);
    res.status(201).json({
        success: true,
        address,
    });
});
exports.getAddress = (0, asyncHandler_1.default)(async (req, res) => {
    const address = await (0, address_service_1.getAddressService)(req.user._id);
    res.status(200).json({
        success: true,
        address,
    });
});
exports.updateAddress = (0, asyncHandler_1.default)(async (req, res) => {
    const address = await (0, address_service_1.updateAddressService)(req.user._id, req.body);
    res.status(200).json({
        success: true,
        address,
    });
});
