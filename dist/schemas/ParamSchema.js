"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamSchema = void 0;
const mongoose_1 = require("mongoose");
const listValueSchema_1 = require("./listValueSchema");
exports.ParamSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    listValues: { type: [listValueSchema_1.ListValueSchema] },
    categoryId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Category" }
});
