import {Schema, Document} from 'mongoose';

export interface ICategory extends Document {
    name: String;
    baseCategoryId: String;
}

export const CategorySchema = new Schema<ICategory>({
    name: {type: String, required: true},
    baseCategoryId: {type: Schema.Types.ObjectId, ref: "BaseCategory", required: true}
});