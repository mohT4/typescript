import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

import './services/databases/mongodb';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('hello express from typescript instead of javascript');
});

const port = process.env.PORT || 6000;

app.listen(port, () => {
  console.log(`app listenning on port ${port}`);
});
