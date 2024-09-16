import { Request, Response } from 'express';
import ParamService from '../services/paramService';
import { CreateParamDto } from '../dtos/createParamDto';
import { UpdateParamDto } from '../dtos/updateParamDto';
import { CreateParamListValueDto } from '../dtos/createParamListValueDto';
import { plainToInstance } from 'class-transformer';
import categoryService from '../services/categoryService';

export const getParams = async (req: Request, res: Response): Promise<void> => {
    try {
        const params = await ParamService.getParams();
        res.status(200).json(params);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}
export const getParam = async (req: Request, res: Response): Promise<void> => {
    try {
        const { paramId } = req.params;

        const param = await ParamService.getParam(paramId);
        res.status(200).json(param);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

export const createParam = async (req: Request, res: Response): Promise<void> => {
    try {
        const data: CreateParamDto = plainToInstance(CreateParamDto, <object>req.body);

        const category = await categoryService.getCategory(data.categoryId);

        if (category === null)
            throw new Error("Category not found");

        const param = await ParamService.createParam(data);

        if (param === null)
            throw new Error("Param was not created");

        res.status(200).json(param);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

export const updateParam = async (req: Request, res: Response): Promise<void> => {
    try {
        const { paramId } = req.params;
        const data: UpdateParamDto = plainToInstance(UpdateParamDto, <object>req.body);

        const param = await ParamService.getParam(paramId);

        if (param === null)
            throw new Error("Param not found");

        const newParam = await ParamService.updateParam(paramId, data);

        if (newParam === null) {
            throw new Error("Param was not updated");
        }

        res.status(200).json(param);

    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}
