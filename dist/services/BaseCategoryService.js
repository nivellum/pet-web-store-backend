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
exports.BaseCategoryService = void 0;
const baseCategory_1 = require("../models/baseCategory");
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const baseCategory = new baseCategory_1.BaseCategory(data);
    yield baseCategory.save();
    return baseCategory;
});
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield baseCategory_1.BaseCategory.findByIdAndUpdate(data, data, { new: true });
});
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield baseCategory_1.BaseCategory.findByIdAndDelete(id);
});
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield baseCategory_1.BaseCategory.find();
});
const getOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield baseCategory_1.BaseCategory.findById(id);
    return category;
});
exports.BaseCategoryService = {
    create,
    update,
    remove,
    getAll,
    getOne
};
