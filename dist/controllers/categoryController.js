"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const class_transformer_1 = require("class-transformer");
const categoryService_1 = require("../services/categoryService");
const categoryCreateDto_1 = require("../dtos/category/categoryCreateDto");
const categoryUpdateDto_1 = require("../dtos/category/categoryUpdateDto");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = (0, class_transformer_1.plainToInstance)(categoryCreateDto_1.CategoryCreateDto, req.body);
        const category = yield categoryService_1.CategoryService.create(data);
        res.status(200).json(category);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { categoryId } = req.params;
        const data = (0, class_transformer_1.plainToInstance)(categoryUpdateDto_1.CategoryUpdateDto, req.body);
        const category = yield categoryService_1.CategoryService.update(categoryId, data);
        res.status(200).json(category);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { categoryId } = req.params;
        const category = yield categoryService_1.CategoryService.remove(categoryId);
        res.status(200).json(category);
    }
    catch (_a) {
    }
});
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield categoryService_1.CategoryService.getAll();
        res.status(200).json(categories);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { categoryId } = req.params;
        const categories = yield categoryService_1.CategoryService.getOne(categoryId);
        res.status(200).json(categories);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.CategoryController = {
    create,
    update,
    remove,
    getAll,
    getOne
};
