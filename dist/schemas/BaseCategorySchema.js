"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCategorySchema = void 0;
const mongoose_1 = require("mongoose");
exports.BaseCategorySchema = new mongoose_1.Schema({
    name: { type: mongoose_1.Schema.Types.String, required: true }
});
