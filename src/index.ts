/* eslint-disable no-console */
import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import routes from './routes';
import errorHandler from '@/middlewares/error-handler';

config();

const port = process.env.PORT || 5000;

const main = async () => {
  try {
    const app = express();

    app.use(cors());
    app.use(cookieParser());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static('public'));
    app.use(morgan('combined'));

    app.use(routes);
    app.use(errorHandler);

    app.listen(port, () => {
      console.clear();
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

main();
