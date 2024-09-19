import { Request, Response } from 'express';
import { CategoryService } from '../services/categoryService';
import { ParamService } from '../services/paramService';
import { ParamCreateDto } from '../dtos/Param/paramCreateDto';
import { ParamUpdateDto } from '../dtos/Param/paramUpdateDto';
import { plainToInstance } from 'class-transformer';

const getAll = async (req: Request, res: Response): Promise<void> => {
    try {
        const params = await ParamService.getAll();
        res.status(200).json(params);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}
const getOne = async (req: Request, res: Response): Promise<void> => {
    try {
        const { paramId } = req.params;

        const param = await ParamService.getOne(paramId);
        res.status(200).json(param);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

const create = async (req: Request, res: Response): Promise<void> => {
    try {
        const data: ParamCreateDto = plainToInstance(ParamCreateDto, <object>req.body);

        const category = await CategoryService.getOne(data.categoryId);

        if (category === null)
            throw new Error("Category not found");

        const param = await ParamService.create(data);

        if (param === null)
            throw new Error("Param was not created");

        res.status(200).json(param);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

const update = async (req: Request, res: Response): Promise<void> => {
    try {
        const { paramId } = req.params;
        const data: ParamUpdateDto = plainToInstance(ParamUpdateDto, <object>req.body);

        const param = await ParamService.getOne(paramId);

        if (param === null)
            throw new Error("Param not found");

        const newParam = await ParamService.update(paramId, data);

        if (newParam === null) {
            throw new Error("Param was not updated");
        }

        res.status(200).json(param);

    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

const remove = async (req: Request, res: Response): Promise<void> => {
    try {
        const { paramId } = req.params;
        
        const param = await ParamService.remove(paramId);

        res.status(200).json(param);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

export const ParamController = {
    create,
    update,
    remove,
    getAll,
    getOne
}