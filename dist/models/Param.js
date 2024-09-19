"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Param = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const paramSchema_1 = require("../schemas/paramSchema");
exports.Param = mongoose_1.default.model("Param", paramSchema_1.ParamSchema);
