import { BaseCategory } from "../models/baseCategory";
import { BaseCategoryCreateDto } from "../dtos/baseCategory/baseCategoryCreateDto";
import { BaseCategoryUpdateDto } from "../dtos/baseCategory/baseCategoryUpdateDto";
import { Types } from "mongoose";

const create = async (data: BaseCategoryCreateDto) => {
    const baseCategory = new BaseCategory(data);
    baseCategory._id = new Types.ObjectId();
    await baseCategory.save();
    return baseCategory;
}

const update = async (id: string, data: BaseCategoryUpdateDto) => {
    return await BaseCategory.findByIdAndUpdate(data, data, { new: true });
}

const remove = async (id: string) => {
    return await BaseCategory.findByIdAndDelete(id);
}

const getAll = async () => {
    return await BaseCategory.find();
}

const getOne = async (id: string) => {
    const category = await BaseCategory.findById(id);
    return category;
}

export const BaseCategoryService = {
    create,
    update,
    remove,
    getAll,
    getOne
}