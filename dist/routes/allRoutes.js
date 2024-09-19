"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseCategoryRoutes_1 = __importDefault(require("./baseCategoryRoutes"));
const categoryRoutes_1 = __importDefault(require("./categoryRoutes"));
const paramRoutes_1 = __importDefault(require("./paramRoutes"));
exports.default = [
    baseCategoryRoutes_1.default,
    categoryRoutes_1.default,
    paramRoutes_1.default
];
