import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import ShortnerController from './controller/ShortnerController.js';
import UserRouter from './router/UserRouter.js';
import ShortnerRouter from './router/ShortnerRouter.js';
import AuthMiddleware from './middleware/auth.middleware.js';

dotenv.config();

const { DATABASE_URL, PORT } = process.env;

mongoose
  .connect(DATABASE_URL)
  .then(() => {
    console.log('Database Connected...');
  })
  .catch((error) => {
    console.error(`Error to connect to database: ${error.message}`);
  });

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (request, response) => response.json({ message: 'Shortner...' }));
app.get('/:hash', ShortnerController.redirect);
app.use(AuthMiddleware);

app.use(UserRouter);
app.use(ShortnerRouter);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
