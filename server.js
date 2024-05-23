// all imports
import express from 'express';
import morgan from 'morgan';
import 'express-async-errors';

import { connectDB } from './database/connectDB.js';
import { errorHandler } from './middleware/errorHandler.js';
import job from './router/job.js';

// initilize server
const server = express();

// connect database via mongoose
connectDB();

// middlewares
if (process.env.NODE_ENV === 'development') server.use(morgan('dev'));
server.use(express.json());

// routes
server.use('/api/v1/jobs', job);

// error handler
server.use(errorHandler);

// setup port
const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Server is running on port ${port}.`));
