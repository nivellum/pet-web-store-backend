import { Types } from "mongoose";
import { CategoryCreateDto } from "../dtos/category/categoryCreateDto";
import { CategoryUpdateDto } from "../dtos/category/categoryUpdateDto";
import { Category } from "../models/category";

const create = async (categoryData: CategoryCreateDto) => {
    const category = new Category(categoryData);
    await category.save();
    return category;
}

const update = async (categoryId: string, categoryData: CategoryUpdateDto) => {
    return await Category.findByIdAndUpdate(categoryId, categoryData, { new: true });
}

const remove = async (categoryId: string) => {
    return await Category.findByIdAndDelete(categoryId);
}

const getAll = async (baseCategoryId?: string) => {
    if (baseCategoryId) {
        return await Category.find({ baseCategoryId: baseCategoryId }).exec();
    }
    else
        return await Category.find();
}

const getOne = async (categoryId: string) => {
    const category = await Category.findById(categoryId);
    return category;
}

export const CategoryService = {
    create,
    update,
    remove,
    getAll,
    getOne
}