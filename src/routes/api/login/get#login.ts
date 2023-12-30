import { Request, Response } from 'express';
import ACUserController from '../../../controller/ACUserController';

export = {
  Permissions: 'public',
  handler: async (req: Request, res: Response) => {
    return ACUserController.getUser(req, res);
  },
};
