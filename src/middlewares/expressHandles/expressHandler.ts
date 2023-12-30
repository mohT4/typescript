import { Request, Response, NextFunction, response } from 'express';
import { StatusCodes } from 'http-status-codes';

const expressHandler =
  (handler: (req: Request) => Promise<any>) =>
  async (req: Request, res: Response) => {
    const response = await handler(req);
    !response ? res.status(StatusCodes.NO_CONTENT).send() : res.json(response);
  };

export = expressHandler;
