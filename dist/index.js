"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categoryRoutes_1 = __importDefault(require("./routes/categoryRoutes"));
const database_1 = __importDefault(require("./config/database"));
const body_parser_1 = __importDefault(require("body-parser"));
require("dotenv").config();
(0, database_1.default)();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(body_parser_1.default.json());
app.use('/api', categoryRoutes_1.default);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
