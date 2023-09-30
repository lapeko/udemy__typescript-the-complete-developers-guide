import "reflect-metadata";

import { appRouter } from '../../../app-router';
import { MetadataKey, Method } from '../../model';
import {Request, RequestHandler, Response} from "express";

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
      appRouter[method as Method](path, middlewares, constructor.prototype[key]);
    });
};
