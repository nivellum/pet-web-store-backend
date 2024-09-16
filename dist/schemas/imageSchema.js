"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ImageSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    path: { type: String, required: true }
});
