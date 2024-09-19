import mongoose from 'mongoose';
import { IProduct, ProductSchema } from '../schemas/productSchema';

export const Product = mongoose.model<IProduct>("Product", ProductSchema);