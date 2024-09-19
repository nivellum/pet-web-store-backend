import { ParamCreateDto } from "../dtos/Param/paramCreateDto";
import { ParamUpdateDto } from "../dtos/Param/paramUpdateDto";
import { Param } from "../models/param";

const getAll = async () => {
    const params = await Param.find();
    return params;
}

const getOne = async (id: string) => {
    const param = await Param.findById(id);
    return param;
};

const create = async (data: ParamCreateDto) => {
    const param = new Param(data);
    param.listValues = [];
    await param.save();
    return param;
}

const update = async (id: string, data: ParamUpdateDto) => {
    return await Param.findByIdAndUpdate(id, data, {new: true});
}

const remove = async (id: string) => {
    return await Param.findByIdAndDelete(id);
}

export const ParamService = {
    create,
    update,
    remove,
    getAll,
    getOne
}