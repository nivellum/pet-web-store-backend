import { CreateCategoryDto } from "../dtos/createCategoryDto";
import Category from "../models/category";
import { CategorySchema, ICategory } from "../schemas/categorySchema";

const createCategory = async (categoryData: CreateCategoryDto) => {
    const category = new Category(categoryData);
    await category.save();
    return category;
}

const updateCategory = async (categoryId: string, categoryData: CreateCategoryDto) => {
    return await Category.findByIdAndUpdate(categoryId, categoryData, {new: true});
}

const getCategories = async () => {
    return await Category.find();
}

const getCategory = async (categoryId: string): Promise<ICategory | null> => {
    const category = await Category.findById(categoryId);
    return category;
}

export default {
    createCategory,
    updateCategory,
    getCategories,
    getCategory
}