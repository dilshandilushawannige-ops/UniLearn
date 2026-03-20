import { body } from 'express-validator';

export const signupValidators = [
  body('username')
    .trim()
    .notEmpty()
    .withMessage('Username is required')
    .isLength({ min: 3 })
    .withMessage('Username must be at least 3 characters'),

  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email format')
    .custom((value) => {
      if (!value.toLowerCase().endsWith('@my.sliit.lk')) {
        throw new Error('Only SLIIT campus emails (@my.sliit.lk) are allowed');
      }
      return true;
    }),

  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),

  body('currentYear')
    .notEmpty()
    .withMessage('Current year is required')
    .isInt({ min: 1, max: 4 })
    .withMessage('Current year must be between 1 and 4'),

  body('currentSemester')
    .notEmpty()
    .withMessage('Current semester is required')
    .isInt({ min: 1, max: 2 })
    .withMessage('Current semester must be 1 or 2'),
];

export const loginValidators = [
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email format'),

  body('password')
    .notEmpty()
    .withMessage('Password is required'),
];
