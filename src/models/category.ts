import mongoose from 'mongoose';
import { CategorySchema, ICategory } from '../schemas/categorySchema';

export const Category = mongoose.model<ICategory>("Category", CategorySchema);