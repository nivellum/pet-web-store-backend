"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryParamSchema = void 0;
const mongoose_1 = require("mongoose");
const listValueSchema_1 = require("./listValueSchema");
exports.CategoryParamSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    listValues: { type: [listValueSchema_1.ListValueSchema], required: true }
});
