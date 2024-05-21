import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from 'morgan';

const server = express();

if (process.env.NODE_ENV === 'development') server.use(morgan('dev'));
server.use(express.json());

const port = process.env.PORT || 5100;
server.listen(port, () => console.log(`Server is running on port ${port}.`));
