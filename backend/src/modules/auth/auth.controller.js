import asyncHandler from '../../utils/asyncHandler.js';
import { signupService, loginService } from './auth.service.js';

export const signup = asyncHandler(async (req, res) => {
  const { username, email, password, currentYear, currentSemester } = req.body;

  const { user, token } = await signupService({
    username,
    email,
    password,
    currentYear,
    currentSemester,
  });

  res.status(201).json({
    success: true,
    message: 'Account created successfully',
    data: { user, token },
  });
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const { user, token } = await loginService({ email, password });

  res.status(200).json({
    success: true,
    message: 'Login successful',
    data: { user, token },
  });
});

export const getMe = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    data: { user: req.user },
  });
});
