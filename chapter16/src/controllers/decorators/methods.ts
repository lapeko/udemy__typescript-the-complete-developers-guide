import "reflect-metadata";

export const get = (path: string) =>
    (target: any, key: string, descriptor: PropertyDescriptor) =>
        Reflect.defineMetadata('path', path, target.constructor.prototype, key)