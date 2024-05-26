import mongoose from 'mongoose';
import { body, param, validationResult } from 'express-validator';

import Job from '../models/job.js';
import User from '../models/user.js';

import { BadRequest, NotFound, Forbidden } from '../error/index.js';

import { JOB_STATUS, JOB_TYPE } from '../constant/index.js';

const validation = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const messages = errors.array().map((error) => error.msg);

    if (messages[0].startsWith('There')) {
      throw new NotFound(messages);
    }

    if (messages[0].startsWith('Forbidden')) {
      throw new Forbidden(messages);
    }

    throw new BadRequest(messages);
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
  param('id').custom(async (value, { req }) => {
    const isValidID = mongoose.Types.ObjectId.isValid(value);
    if (!isValidID) throw new Error('Invalid MongoDB ID.');

    const job = await Job.findById(value);
    if (!job) throw new Error(`There is no job with ID ${value}.`);

    const isAdmin = req.user.role === 'admin';
    const isOwner = req.user.uid === job.createdBy.toString();

    if (!isAdmin && !isOwner) {
      throw new Error('Forbidden - Not Authorized.');
    }
  }),
]);

export const validateUserInput = withValidationErrors([
  body('name').notEmpty().withMessage('Name field cannot be left empty.'),
  body('lastname')
    .notEmpty()
    .withMessage('Lastname field cannot be left empty.'),

  body('email')
    .notEmpty()
    .withMessage('Email field cannot be left empty.')
    .isEmail()
    .withMessage('Invalid email format.')
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new Error('This email has already been registered.');
      }
    }),

  body('password')
    .notEmpty()
    .withMessage('Password field cannot be left empty.')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters.'),

  body('location')
    .notEmpty()
    .withMessage('Location field cannot be left empty.'),
]);

export const validateUser = withValidationErrors([
  body('email')
    .notEmpty()
    .withMessage('Email field cannot be left empty.')
    .isEmail()
    .withMessage('Invalid email format.'),

  body('password')
    .notEmpty()
    .withMessage('Password field cannot be left empty.'),
]);
