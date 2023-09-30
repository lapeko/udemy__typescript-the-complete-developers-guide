import "reflect-metadata";

import { appRouter } from '../../app-router';
import { MetadataKey, Method } from '../model';
import {Request, RequestHandler, Response} from "express";
import {validateBody} from "./body-validator";

export const controller = (prefix: string) => (constructor: Function) => {
  Object.getOwnPropertyNames(constructor.prototype)
    .filter(key => key !== "constructor")
    .map(key => ({
      key,
      path: Reflect.getMetadata(MetadataKey.Path, constructor.prototype, key),
    }))
    .map(({ key, path }) => ({ key, path: `${prefix}${path}` }))
    .forEach(({ key, path }) => {
      const method = Reflect.getMetadata(MetadataKey.Method, constructor.prototype, key);
      const middlewares = Reflect.getMetadata(MetadataKey.Middlewares, constructor.prototype, key) as RequestHandler[] | void || [];
      const requiredBodyProps = Reflect.getMetadata(MetadataKey.RequiredBodyProps, constructor.prototype, key) as string[] | undefined;
      const bodyValidator = validateBody(requiredBodyProps);
      appRouter[method as Method](path, middlewares, bodyValidator, constructor.prototype[key]);
    });
};
