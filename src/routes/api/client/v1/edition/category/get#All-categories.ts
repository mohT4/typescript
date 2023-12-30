import EDCategoryController from '../../../../../../controller/edition/EDCategoryController';

export = {
  Permissions: 'public',
  handler: async () => {
    return await EDCategoryController.Model.find();
  },
};
