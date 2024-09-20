import { Request, Response } from 'express';
import { plainToInstance } from 'class-transformer';
import { CategoryService } from '../services/categoryService';
import { CategoryCreateDto } from '../dtos/category/categoryCreateDto';
import { CategoryUpdateDto } from '../dtos/category/categoryUpdateDto';
import { BaseCategory } from '../models/baseCategory';
import { BaseCategoryService } from '../services/baseCategoryService';
import { IBaseCategory } from '../schemas/baseCategorySchema';

const create = async (req: Request, res: Response): Promise<void> => {
    try {
        const data: CategoryCreateDto = plainToInstance(CategoryCreateDto, <object>req.body);
        const baseCategory = await BaseCategoryService.getOne(data.baseCategoryId);

        if (baseCategory === null) {
            throw new Error("Base category not found");
        }
        const category = await CategoryService.create(data);
        res.status(200).json(category);
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}

const update = async (req: Request, res: Response): Promise<void> => {
    try {

        const { categoryId } = req.params;

        const data: CategoryUpdateDto = plainToInstance(CategoryUpdateDto, <object>req.body);
        const category = await CategoryService.update(categoryId, data);

        if (category === null)
            throw new Error("Category not found");

        res.status(200).json(category);
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}

const remove = async (req: Request, res: Response): Promise<void> => {
    try {
        const { categoryId } = req.params;

        const category = await CategoryService.remove(categoryId);

        if (category === null)
            throw new Error("Category not found");

        res.status(200).json(category);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

const getAll = async (req: Request, res: Response): Promise<void> => {
    try {
        const categories = await CategoryService.getAll();
        res.status(200).json(categories);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }

}

const getOne = async (req: Request, res: Response): Promise<void> => {
    try {
        const { categoryId } = req.params;
        const categories = await CategoryService.getOne(categoryId);
        res.status(200).json(categories);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }

}

export const CategoryController = {
    create,
    update,
    remove,
    getAll,
    getOne
}
