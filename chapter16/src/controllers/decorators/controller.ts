import "reflect-metadata";

import { appRouter } from '../../../app-router';
import { Method } from '../../model';

export const controller = (prefix: string) => (constructor: Function) => {
  Object.getOwnPropertyNames(constructor.prototype)
    .filter(key => key !== "constructor")
    .map(key => [
      key,
      Reflect.getMetadata('path', constructor.prototype, key),
      Reflect.getMetadata('method', constructor.prototype, key)
    ])
    .map(([key, path, method]) => [key, `${prefix}${path}`, method])
    .forEach(([key, path, method]) => appRouter[method as Method](path, constructor.prototype[key]));
};
