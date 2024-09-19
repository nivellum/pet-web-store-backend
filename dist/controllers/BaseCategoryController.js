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
exports.BaseCategoryController = void 0;
const class_transformer_1 = require("class-transformer");
const baseCategoryService_1 = require("../services/baseCategoryService");
const baseCategoryUpdateDto_1 = require("../dtos/baseCategory/baseCategoryUpdateDto");
const baseCategoryCreateDto_1 = require("../dtos/baseCategory/baseCategoryCreateDto");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = (0, class_transformer_1.plainToInstance)(baseCategoryCreateDto_1.BaseCategoryCreateDto, req.body);
        const baseCategory = yield baseCategoryService_1.BaseCategoryService.create(data);
        res.status(200).json(baseCategory);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { baseCategoryId } = req.params;
        const data = (0, class_transformer_1.plainToInstance)(baseCategoryUpdateDto_1.BaseCategoryUpdateDto, req.body);
        const baseCategory = yield baseCategoryService_1.BaseCategoryService.update(baseCategoryId, data);
        res.status(200).json(baseCategory);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { baseCategoryId } = req.params;
        const baseCategory = yield baseCategoryService_1.BaseCategoryService.remove(baseCategoryId);
        res.status(200).json(baseCategory);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const baseCategories = yield baseCategoryService_1.BaseCategoryService.getAll();
        res.status(200).json(baseCategories);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { baseCategoryId } = req.params;
        const baseCategory = yield baseCategoryService_1.BaseCategoryService.getOne(baseCategoryId);
        res.status(200).json(baseCategory);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.BaseCategoryController = {
    create,
    update,
    remove,
    getAll,
    getOne
};
