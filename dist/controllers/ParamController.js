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
exports.ParamController = void 0;
const categoryService_1 = require("../services/categoryService");
const paramService_1 = require("../services/paramService");
const paramCreateDto_1 = require("../dtos/Param/paramCreateDto");
const paramUpdateDto_1 = require("../dtos/Param/paramUpdateDto");
const class_transformer_1 = require("class-transformer");
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = yield paramService_1.ParamService.getAll();
        res.status(200).json(params);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { paramId } = req.params;
        const param = yield paramService_1.ParamService.getOne(paramId);
        res.status(200).json(param);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = (0, class_transformer_1.plainToInstance)(paramCreateDto_1.ParamCreateDto, req.body);
        const category = yield categoryService_1.CategoryService.getOne(data.categoryId);
        if (category === null)
            throw new Error("Category not found");
        const param = yield paramService_1.ParamService.create(data);
        if (param === null)
            throw new Error("Param was not created");
        res.status(200).json(param);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { paramId } = req.params;
        const data = (0, class_transformer_1.plainToInstance)(paramUpdateDto_1.ParamUpdateDto, req.body);
        const param = yield paramService_1.ParamService.getOne(paramId);
        if (param === null)
            throw new Error("Param not found");
        const newParam = yield paramService_1.ParamService.update(paramId, data);
        if (newParam === null) {
            throw new Error("Param was not updated");
        }
        res.status(200).json(param);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { paramId } = req.params;
        const param = yield paramService_1.ParamService.remove(paramId);
        res.status(200).json(param);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.ParamController = {
    create,
    update,
    remove,
    getAll,
    getOne
};
