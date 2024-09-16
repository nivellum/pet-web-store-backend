"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListValueSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ListValueSchema = new mongoose_1.Schema({
    name: { type: String, required: true }
});
