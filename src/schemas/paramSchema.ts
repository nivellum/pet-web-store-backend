import { Schema } from 'mongoose';
import { ListValueSchema, IListValue } from './listValueSchema';

export interface IParam extends Document {
    name: String;
    type: String;
    listValues: IListValue[];
    categoryId: Schema.Types.ObjectId
}

export const ParamSchema = new Schema<IParam>({
    name: {type: String, required: true},
    type: {type: String, required: true},
    listValues: {type: [ListValueSchema]},
    categoryId: {type: Schema.Types.ObjectId, ref: "Category"}
});