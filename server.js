// env variables
import * as dotenv from 'dotenv';
dotenv.config();

// all imports
import express from 'express';
import morgan from 'morgan';

import { connectDB } from './database/connectDB.js';

// initilize server
const server = express();

// connect database via mongoose
connectDB();

// middlewares
if (process.env.NODE_ENV === 'development') server.use(morgan('dev'));
server.use(express.json());

// setup port
const port = process.env.PORT || 5100;
server.listen(port, () => console.log(`Server is running on port ${port}.`));
