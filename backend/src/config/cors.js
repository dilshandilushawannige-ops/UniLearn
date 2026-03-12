import cors from 'cors';

export const configureCors = () => {
  return cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  });
};
