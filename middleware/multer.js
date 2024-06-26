import path from 'path';
import multer from 'multer';
import DataParser from 'datauri/parser.js';

const storage = multer.memoryStorage();

const parser = new DataParser();

export const formatImage = (file) => {
  const fileExtension = path.extname(file.originalname).toString();

  return parser.format(fileExtension, file.buffer).content;
};

export const upload = multer({ storage });
