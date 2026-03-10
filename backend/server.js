import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './src/config/db.js';
import { configureCors } from './src/config/cors.js';
import apiRoutes from './src/routes/index.js';
import { errorMiddleware } from './src/middlewares/error.middleware.js';

dotenv.config();

if (!process.env.JWT_SECRET) {
  console.error('FATAL ERROR: JWT_SECRET is not defined in environment variables.');
  process.exit(1);
}

const app = express();

connectDB();

app.use(configureCors());
app.use(express.json());

app.use('/api', apiRoutes);

// Global error handler — must be registered after routes
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
