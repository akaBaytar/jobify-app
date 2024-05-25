import mongoose from 'mongoose';
import { body, param, validationResult } from 'express-validator';

import Job from '../models/job.js';
import { BadRequest } from '../error/BadRequest.js';
import { NotFound } from '../error/NotFound.js';
import { JOB_STATUS, JOB_TYPE } from '../constant/index.js';

const validation = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const messages = errors.array().map((error) => error.msg);

    if (messages[0].startsWith('Invalid')) {
      throw new BadRequest(messages);
    } else {
      throw new NotFound(messages);
    }
  }

  next();
};

const withValidationErrors = (validateValues) => {
  return [validateValues, validation];
};

export const validateInput = withValidationErrors([
  body('company').notEmpty().withMessage('Company field is required.'),
  body('position').notEmpty().withMessage('Position field is required.'),
  body('location').notEmpty().withMessage('Location field is required.'),

  body('status')
    .isIn(Object.values(JOB_STATUS))
    .withMessage('Invalid status type.'),

  body('type').isIn(Object.values(JOB_TYPE)).withMessage('Invalid job type.'),
]);

export const validateID = withValidationErrors([
  param('id').custom(async (value) => {
    const isValidID = mongoose.Types.ObjectId.isValid(value);
    if (!isValidID) throw new Error('Invalid MongoDB ID.');

    const job = await Job.findById(value);
    if (!job) throw new Error(`There is no job with ID ${value}.`);
  }),
]);