"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const dotenv_1 = __importDefault(require("dotenv"));
const userModel_1 = require("../models/userModel");
dotenv_1.default.config();
const createAdmin = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGO_URI);
        const existingAdmin = await userModel_1.User.findOne({
            email: "admin@gmail.com",
        });
        if (existingAdmin) {
            console.log("Admin already exists");
            process.exit();
        }
        const hashedPassword = await bcryptjs_1.default.hash("admin123", 10);
        const admin = await userModel_1.User.create({
            name: "Admin",
            email: "admin@gmail.com",
            password: hashedPassword,
            role: "admin",
            isVerified: true,
        });
        console.log("Admin created successfully");
        console.log(admin);
        process.exit();
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
};
createAdmin();
