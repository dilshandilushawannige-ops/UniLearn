import { User } from '../../models/User.js';
import { generateToken } from '../../utils/generateToken.js';
import ApiError from '../../utils/ApiError.js';

export const signupService = async ({
  username,
  email,
  password,
  currentYear,
  currentSemester,
}) => {
  const existingUser = await User.findOne({ email: email.toLowerCase() });
  if (existingUser) {
    throw new ApiError(409, 'An account with this email already exists');
  }

  const user = await User.create({
    username,
    email: email.toLowerCase(),
    password,
    currentYear: Number(currentYear),
    currentSemester: Number(currentSemester),
  });

  const token = generateToken(user._id);

  return { user, token };
};

export const loginService = async ({ email, password }) => {
  // Fetch user including password field for comparison
  const user = await User.findOne({ email: email.toLowerCase() }).select(
    '+password'
  );

  if (!user) {
    // Deliberate vague message to prevent user enumeration
    throw new ApiError(401, 'Invalid email or password');
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new ApiError(401, 'Invalid email or password');
  }

  const token = generateToken(user._id);

  return { user, token };
};
