import express, {Application, Request,} from 'express';
import categoryRoutes from "./routes/categoryRoutes";
import connectDB from './config/database';
import bodyParser from 'body-parser';
import 'reflect-metadata';
import { CorsRequest } from 'cors';

require("dotenv").config();

connectDB();

const app: Application = express();
const port = process.env.PORT;

var cors = require('cors');

const allowedOrigins = ['http://localhost:3000'];

const options = {
  origin: allowedOrigins
};

app.use(cors());

app.use(bodyParser.json());

app.options('*', cors(options));

app.use('/api', categoryRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

