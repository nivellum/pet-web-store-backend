import mongoose from "mongoose";

import { IParam, ParamSchema } from "../schemas/paramSchema";

export const Param = mongoose.model<IParam>("Param", ParamSchema);