import { Schema, Document } from 'mongoose';
import { IImage, ImageSchema } from './imageSchema';

export interface IProduct extends Document {
    name: String;
    categoryId: Schema.Types.ObjectId;
    createdAt: Date;
    price: Number;
    description: String,
    images: IImage[],
    
}

export const ProductSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    categoryId: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    createdAt: { type: Date, required: true, default: Date.now },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    images: { type: [ImageSchema]}
});