"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema_1 = require("../schemas/productSchema");
exports.default = mongoose_1.default.model("Product", productSchema_1.ProductSchema);
