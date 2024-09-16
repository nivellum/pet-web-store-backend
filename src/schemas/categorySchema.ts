import {Schema, Document} from 'mongoose';
import { IImage, ImageSchema } from './imageSchema';

export interface ICategory extends Document {
    name: String;
    image: IImage;
}

export const CategorySchema = new Schema<ICategory>({
    name: {type: String, required: true},
    image: {type: ImageSchema},
});