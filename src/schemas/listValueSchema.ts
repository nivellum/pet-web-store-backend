import {Schema, Document} from "mongoose";

export interface IListValue extends Document {
    name: String;
}

export const ListValueSchema = new Schema<IListValue>({
    name: {type: String, required: true}
});