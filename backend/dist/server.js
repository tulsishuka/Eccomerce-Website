"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// import { connectDB } from "./config/database.config";
const app_1 = __importDefault(require("./app"));
const database_config_1 = require("./config/database.config");
const startServer = async () => {
    try {
        await (0, database_config_1.connectDB)();
        const PORT = process.env.PORT || 5000;
        app_1.default.listen(PORT, () => {
            console.log(`Server running on ${PORT}`);
        });
    }
    catch (error) {
        console.error("❌ Server failed:", error);
        process.exit(1);
    }
};
startServer();
