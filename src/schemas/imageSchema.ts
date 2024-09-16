
import { Schema, Document } from 'mongoose';


export interface IImage extends Document {
    name: String;
    path: String
}

export const ImageSchema = new Schema<IImage>({
    name: { type: String, required: true },
    path: { type: String, required: true }
});