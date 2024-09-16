import { CreateParamDto } from "../dtos/createParamDto";
import { UpdateParamDto } from "../dtos/updateParamDto";
import { CreateParamListValueDto } from "../dtos/createParamListValueDto";
import { IParam, ParamSchema } from "../schemas/paramSchema";
import Param from "../models/param";
import { Model } from "mongoose";

const getParams = async () => {
    const params = await Param.find();
    return params;
}

const getParam = async (paramId: string) => {
    const param = await Param.findById(paramId);
    return param;
};

const createParam = async (data: CreateParamDto) => {
    const param = new Param(data);
    param.listValues = [];
    await param.save();
    return param;
}

const updateParam = async (paramId: string, data: UpdateParamDto) => {
    return await Param.findByIdAndUpdate(paramId, data, {new: true});
}

const createParamListValue = async (paramId: string, data: CreateParamListValueDto) => {
    // const param: Document<IParam> = await Param.findById(paramId);
    // param.
}


export default {
    getParam,
    getParams,
    createParam,
    updateParam,
    createParamListValue
}