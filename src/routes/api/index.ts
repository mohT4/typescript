import express, { Request, Response, Express } from 'express';
import asyncHandler from 'express-async-handler';
import expressHandler from '../../middlewares/expressHandles/expressHandler';
import fs from 'fs';

const router = express.Router();

const dirName = './src/routes/api';

const filesIgnore: string[] = [`${dirName}/index.ts`];

const fileNameFormat: RegExp = /(get|put|post|delete)#[\w\s-]+\.ts/;
const jestFileNameFormat: RegExp = /[\w\s-]+\.test\.js/;

const generateApiRoutes = (dir: string) => {
  const level: string[] = fs.readdirSync(dir);
  if (level.some((item) => ':' === item[0])) level.reverse();

  level.forEach((fileName) => {
    const path = `${dir}/${fileName}`;
    const stat = fs.statSync(path);

    if (stat && stat.isDirectory()) return generateApiRoutes(path);

    if (stat.isFile()) {
      if (!fileName.match(fileNameFormat)) {
        if (!filesIgnore.includes(path) || fileName.match(jestFileNameFormat)) {
          throw new Error(`route : informal file name: ${dir}/${fileName}`);
        }
      } else {
        const [method]: string[] = fileName.split('#');
        let requestUrl = dir.replace(dirName, '').toLowerCase();
        const [__fileName] = fileName.split('.');
        const __path = `${dir}/${[__fileName]}`.replace(dirName, '.');

        const { handler } = require(__path);
        (router as any)[method](
          requestUrl,
          asyncHandler(expressHandler(handler))
        );
      }
    }
  });
};

export = (app: Express) => {
  generateApiRoutes(dirName);

  app.use('/api', router);
};
