import colors from 'colors';
colors.enable();

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

import connectDB from './db/config.js';
connectDB();

// Route imports
import jobsRouter from './routes/jobRoutes.js';

// Port
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/jobs', jobsRouter);

// Server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`.bgMagenta.black);
});
