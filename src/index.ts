import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import setUpRoutes from './routes';
dotenv.config();

import './services/databases/mongodb';

const app: Express = express();

const port = process.env.PORT || 6000;

setUpRoutes(app);

app.get('/', (req: Request, res: Response) => {
  res.send('hello express from typescript instead of javascript');
});

app.listen(port, () => {
  console.log(`app listenning on port ${port}`);
});
