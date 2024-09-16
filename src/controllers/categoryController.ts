import { Request, Response, response } from 'express';
import { plainToInstance } from 'class-transformer';
import CategoryService from '../services/categoryService';
import { CreateCategoryDto } from '../dtos/createCategoryDto';
import { UpdateCategoryDto } from '../dtos/updateCategoryDto';

export const createCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        const data: CreateCategoryDto = plainToInstance(CreateCategoryDto, <object>req.body);
        const category = await CategoryService.createCategory(data);
        res.status(200).json(category);
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}

export const updateCategory = async (req: Request, res: Response): Promise<void> => {
    try {

        const { categoryId } = req.params;

        const data: UpdateCategoryDto = plainToInstance(UpdateCategoryDto, <object>req.body);
        const category = await CategoryService.updateCategory(categoryId, data);
        res.status(200).json(category);
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}

export const getCategories = async (req: Request, res: Response): Promise<void> => {
    try {
        const categories = await CategoryService.getCategories();
        res.status(200).json(categories);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }

}

export const getCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        const { categoryId } = req.params;
        const categories = await CategoryService.getCategory(categoryId);
        res.status(200).json(categories);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
    
}
