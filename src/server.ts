import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';
import 'dotenv/config';

import './database/connection';
import { routes } from './routes';
import { errorHandler } from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.use('/image', express.static(path.join(__dirname, '..', 'uploads')));

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Server Started at ${process.env.API_URL}`);
});