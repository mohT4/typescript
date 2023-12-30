import { Request, Response } from 'express';
import Error from 'http-errors';
import { StatusCodes } from 'http-status-codes';

class ACUserController {
  constructor() {}

  async getUser(req: Request, res: Response) {
    res.status(StatusCodes.OK).json({
      status: 'success',
      message: 'hello from typescript :)',
    });
  }
}

export = new ACUserController();
