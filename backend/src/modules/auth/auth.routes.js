import { Router } from 'express';
import { signup, login, getMe } from './auth.controller.js';
import { signupValidators, loginValidators } from './auth.validators.js';
import { validate } from '../../middlewares/validate.middleware.js';
import { protect } from '../../middlewares/auth.middleware.js';

const router = Router();

// POST /api/auth/signup
router.post('/signup', signupValidators, validate, signup);

// POST /api/auth/login
router.post('/login', loginValidators, validate, login);

// GET /api/auth/me  (protected)
router.get('/me', protect, getMe);

export default router;
