import { Request, Response } from 'express';
import EDCategoryController from '../../../../../../controller/edition/EDCategoryController';

export = {
  Permissions: 'public',
  handler: async (req: Request, res: Response) => {
    return EDCategoryController.getAllCategories(req, res);
  },
};
