import mongoose from "mongoose";
import { IBaseCategory, BaseCategorySchema } from "../schemas/baseCategorySchema";

export const BaseCategory = mongoose.model<IBaseCategory>("BaseCategory", BaseCategorySchema);
