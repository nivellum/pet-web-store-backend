"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose_1 = require("mongoose");
const imageSchema_1 = require("./imageSchema");
exports.ProductSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    categoryId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Category', required: true },
    createdAt: { type: Date, required: true, default: Date.now },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    images: { type: [imageSchema_1.ImageSchema] }
});
