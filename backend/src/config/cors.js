import cors from 'cors';

export const configureCors = () => {
  return cors({
    origin: true,
    credentials: true,
  });
};
