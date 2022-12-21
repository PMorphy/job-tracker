import colors from 'colors';
colors.enable();

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`.bgMagenta.black);
});
