import mongoose from 'mongoose';
import { ICategory, CategorySchema } from '../schemas/categorySchema';

export default mongoose.model<ICategory>("Category", CategorySchema);