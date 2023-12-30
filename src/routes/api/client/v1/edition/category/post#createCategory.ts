import Joi from 'joi';
import { Request, Response } from 'express';
import EDCategoryController from '../../../../../../controller/edition/EDCategoryController';
import { StatusCodes } from 'http-status-codes';

export = {
  permissions: 'public',
  validate: {
    body: Joi.object({
      name: Joi.object({
        en: Joi.string().description('category name in english'),
        fr: Joi.string().description('category name in french'),
        ar: Joi.string().description('category name in arabic'),
      }).required(),
    }),
  },

  handler: async ({ body }: Request) => {
    const category = await EDCategoryController.Model.create({ ...body });

    return category;
  },
};
