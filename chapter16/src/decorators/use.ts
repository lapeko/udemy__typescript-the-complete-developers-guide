import { RequestHandler } from "express";

import "reflect-metadata";

import { MetadataKey } from "../model";

export const use = (middleware: RequestHandler) => (target: any, key: string, descriptor: PropertyDescriptor) => {
    const middlewares = Reflect.getMetadata(MetadataKey.Middlewares, target, key) || [];
    middlewares.push(middleware);
    Reflect.defineMetadata(MetadataKey.Middlewares, middlewares, target, key);
}