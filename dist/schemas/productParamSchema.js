"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductParamSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ProductParamSchema = new mongoose_1.Schema({
    categoryParamId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Category.params", required: true },
    stringValue: String,
    listValueId: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Category.params.listValues" }]
});
