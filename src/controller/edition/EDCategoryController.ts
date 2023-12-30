import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

class EDCategoryController {
  constructor() {}

  async getAllCategories(req: Request, res: Response) {
    res.status(StatusCodes.OK).json({
      status: 'success',
      message: 'all categories by express',
    });
  }
}

export = new EDCategoryController();
