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
exports.CategoryService = void 0;
const category_1 = require("../models/category");
const create = (categoryData) => __awaiter(void 0, void 0, void 0, function* () {
    const category = new category_1.Category(categoryData);
    yield category.save();
    return category;
});
const update = (categoryId, categoryData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield category_1.Category.findByIdAndUpdate(categoryId, categoryData, { new: true });
});
const remove = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield category_1.Category.findByIdAndDelete(categoryId);
});
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield category_1.Category.find();
});
const getOne = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield category_1.Category.findById(categoryId);
    return category;
});
exports.CategoryService = {
    create,
    update,
    remove,
    getAll,
    getOne
};
