"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const body_parser_1 = __importDefault(require("body-parser"));
require("reflect-metadata");
const allRoutes_1 = __importDefault(require("./routes/allRoutes"));
require("dotenv").config();
(0, database_1.default)();
const app = (0, express_1.default)();
const port = process.env.PORT;
var cors = require('cors');
const allowedOrigins = ['http://localhost:3000'];
const options = {
    origin: allowedOrigins
};
app.use(cors());
app.use(body_parser_1.default.json());
app.options('*', cors(options));
app.use('/api', allRoutes_1.default);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
