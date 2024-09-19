import { Request, Response } from 'express';
import { plainToInstance } from 'class-transformer';
import { BaseCategoryService } from '../services/baseCategoryService';
import { BaseCategoryUpdateDto } from '../dtos/baseCategory/baseCategoryUpdateDto';
import { BaseCategoryCreateDto } from '../dtos/baseCategory/baseCategoryCreateDto';

const create = async (req: Request, res: Response): Promise<void> => {
    try {
        const data: BaseCategoryCreateDto = plainToInstance(BaseCategoryCreateDto, <object>req.body);
        const baseCategory = await BaseCategoryService.create(data);
        res.status(200).json(baseCategory);
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}

const update = async (req: Request, res: Response): Promise<void> => {
    try {

        const { baseCategoryId } = req.params;

        const data: BaseCategoryUpdateDto = plainToInstance(BaseCategoryUpdateDto, <object>req.body);
        const baseCategory = await BaseCategoryService.update(baseCategoryId, data);
        res.status(200).json(baseCategory);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

const remove = async (req: Request, res: Response): Promise<void> => {
    try {
        const { baseCategoryId } = req.params;

        const baseCategory = await BaseCategoryService.remove(baseCategoryId);
        res.status(200).json(baseCategory);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

const getAll = async (req: Request, res: Response): Promise<void> => {
    try {
        const baseCategories = await BaseCategoryService.getAll();
        res.status(200).json(baseCategories);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

const getOne = async (req: Request, res: Response): Promise<void> => {
    try {
        const { baseCategoryId } = req.params;
        const baseCategory = await BaseCategoryService.getOne(baseCategoryId);
        res.status(200).json(baseCategory);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

export const BaseCategoryController = {
    create,
    update,
    remove,
    getAll,
    getOne
}