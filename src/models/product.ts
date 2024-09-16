import mongoose from 'mongoose';
import { IProduct, ProductSchema } from '../schemas/productSchema';

export default mongoose.model<IProduct>("Product", ProductSchema);