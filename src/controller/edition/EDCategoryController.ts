import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import EDCategory from '../../model/category/ed-category';

class EDCategoryController {
  Model: typeof EDCategory;
  constructor(Model: typeof EDCategory) {
    this.Model = Model;
  }
}

export = new EDCategoryController(EDCategory);
