"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const FILETYPE = {
    "image/png": "png",
    "image/jpeg": "jpeg",
    "image/jpg": "jpg",
};
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        const isValidFormat = FILETYPE[file.mimetype];
        let uploadError = new Error("Invalid format image! jpeg or png");
        if (isValidFormat) {
            uploadError = null;
        }
        cb(uploadError, "public/uploads");
    },
    filename: function (req, file, cb) {
        const uniqueFile = `${file.fieldname}-${Date.now()}${path_1.default.extname(file.originalname)}`;
        cb(null, uniqueFile);
    },
});
exports.upload = (0, multer_1.default)({ storage });
