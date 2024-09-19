"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCategory = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const baseCategorySchema_1 = require("../schemas/baseCategorySchema");
exports.BaseCategory = mongoose_1.default.model("BaseCategory", baseCategorySchema_1.BaseCategorySchema);
