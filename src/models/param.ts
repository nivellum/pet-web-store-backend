import mongoose from "mongoose";

import { IParam, ParamSchema } from "../schemas/paramSchema";

export default mongoose.model<IParam>("Param", ParamSchema);