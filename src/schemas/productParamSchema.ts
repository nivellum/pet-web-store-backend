import {Schema, Document} from 'mongoose';

export interface IProductParam extends Document {
    categoryParamId: Schema.Types.ObjectId;
    // productId: Schema.Types.ObjectId;
    stringValue: String;
    listValueId: Schema.Types.ObjectId[];
}

export const ProductParamSchema = new Schema<IProductParam>({
    categoryParamId: {type: Schema.Types.ObjectId, ref: "Category.params", required: true},
    stringValue: String,
    listValueId: [{type: Schema.Types.ObjectId, ref: "Category.params.listValues" }] 
});