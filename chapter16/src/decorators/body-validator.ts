import {MetadataKey} from "../model";
import {RequestHandler} from "express";

export const validateBody = (keys?: string[]): RequestHandler => (req, res, next) => {
    if (!keys) return next();
    if (keys.some(key => req.body[key] == undefined))
        return res.status(400).send('Body is incorrect');
    next();
};

export const body = (requiredKeys: string[]) =>
    (target: any, key: string, descriptor: PropertyDescriptor) =>
        Reflect.defineMetadata(MetadataKey.RequiredBodyProps, requiredKeys, target, key);
