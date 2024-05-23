import { body, validationResult } from 'express-validator';

import { BadRequest } from '../error/BadRequest.js';

const validation = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const messages = errors.array().map((error) => error.msg);
    throw new BadRequest(messages);
  }

  next();
};

const withValidationErrors = (validateValues) => {
  return [validateValues, validation];
};

// placeholder for validate middleware
export const validate = withValidationErrors([
  body('name')
    .notEmpty()
    .withMessage('Name is required.')
    .isLength({ min: 3 })
    .withMessage('Name must be at least 3 characters.')
    .trim(),
]);
