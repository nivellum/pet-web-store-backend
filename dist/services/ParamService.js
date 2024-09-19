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
exports.ParamService = void 0;
const param_1 = require("../models/param");
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const params = yield param_1.Param.find();
    return params;
});
const getOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const param = yield param_1.Param.findById(id);
    return param;
});
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const param = new param_1.Param(data);
    param.listValues = [];
    yield param.save();
    return param;
});
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield param_1.Param.findByIdAndUpdate(id, data, { new: true });
});
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield param_1.Param.findByIdAndDelete(id);
});
exports.ParamService = {
    create,
    update,
    remove,
    getAll,
    getOne
};
