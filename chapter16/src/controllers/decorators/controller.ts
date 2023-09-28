import { Router } from 'express';

import "reflect-metadata";

export const router = Router();

export const controller = (prefix: string) => (constructor: Function) => {
  Object.getOwnPropertyNames(constructor.prototype)
    .filter(key => key !== "constructor")
    .map(key => [key, Reflect.getMetadata('path', constructor.prototype, key)])
    .map(([key, path]) => [key, `${prefix}${path}`])
    .forEach(([key, path]) => router.get(path, constructor.prototype[key]));
};
