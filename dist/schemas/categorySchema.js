"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySchema = void 0;
const mongoose_1 = require("mongoose");
const imageSchema_1 = require("./imageSchema");
const categoryParamSchema_1 = require("./categoryParamSchema");
exports.CategorySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    image: { type: imageSchema_1.ImageSchema },
    params: { type: [categoryParamSchema_1.CategoryParamSchema] }
});
