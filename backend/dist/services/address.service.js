"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAddressService = exports.getAddressService = exports.addAddressService = void 0;
const address_model_1 = __importDefault(require("../models/address.model"));
const addAddressService = async (userId, data) => {
    const existingAddress = await address_model_1.default.findOne({
        user: userId,
    });
    if (existingAddress) {
        throw new Error("Address already exists. Please update it.");
    }
    return await address_model_1.default.create({
        user: userId,
        ...data,
    });
};
exports.addAddressService = addAddressService;
const getAddressService = async (userId) => {
    return await address_model_1.default.findOne({
        user: userId,
    });
};
exports.getAddressService = getAddressService;
const updateAddressService = async (userId, data) => {
    return await address_model_1.default.findOneAndUpdate({
        user: userId,
    }, data, {
        new: true,
    });
};
exports.updateAddressService = updateAddressService;
