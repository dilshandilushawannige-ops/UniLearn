import ApiError from '../utils/ApiError.js';

export const errorMiddleware = (err, req, res, next) => {
  // Known operational errors thrown via ApiError
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      errors: err.errors,
    });
  }

  // Mongoose duplicate key (e.g. unique email)
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    const fieldName = field.charAt(0).toUpperCase() + field.slice(1);
    return res.status(409).json({
      success: false,
      message: `${fieldName} is already in use`,
    });
  }

  // Mongoose schema validation errors
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({
      success: false,
      message: messages.join(', '),
    });
  }

  // Unexpected errors — log server-side, do not expose internals
  console.error('[Unhandled Error]', err);
  return res.status(500).json({
    success: false,
    message: 'Internal server error',
  });
};
