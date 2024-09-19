import { Schema } from "mongoose";
import { IImage } from "./imageSchema";

export interface IBaseCategory {
    name: string;
    image: IImage;
}


export const BaseCategorySchema = new Schema<IBaseCategory>({
    name: {type: Schema.Types.String, required: true }
});