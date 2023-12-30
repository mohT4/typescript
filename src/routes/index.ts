import { Express } from 'express';
import apiRoutes from './api';

export = (app: Express) => {
  apiRoutes(app);
};
