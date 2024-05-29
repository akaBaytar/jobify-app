// all imports
import express from 'express';
import 'express-async-errors';

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import { connectDB } from './database/connectDB.js';

import { errorHandler } from './middleware/errorHandler.js';
import { authenticateUser } from './middleware/authenticate.js';

import job from './router/job.js';
import auth from './router/auth.js';
import user from './router/user.js';

// initilize server
const server = express();

// connect database via mongoose
connectDB();

// middlewares
if (process.env.NODE_ENV === 'development') server.use(morgan('dev'));
server.use(express.json());
server.use(cookieParser());

// public
const __dirname = dirname(fileURLToPath(import.meta.url));
server.use(express.static(path.resolve(__dirname, './public'))); 

// routes
server.use('/api/v1/auth', auth);
server.use('/api/v1/jobs', authenticateUser, job);
server.use('/api/v1/user', authenticateUser, user);

// error handler
server.use(errorHandler);

// setup port
const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Server is running on port ${port}.`));
