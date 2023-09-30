import "reflect-metadata";
import { Method, MetadataKey } from "../../model";

const buildMethodDecorator = (method: Method) => (path: string) =>
    (target: any, key: string, descriptor: PropertyDescriptor) => {
        Reflect.defineMetadata(MetadataKey.Path, path, target, key);
        Reflect.defineMetadata(MetadataKey.Method, method, target, key);
    }

export const get = buildMethodDecorator(Method.Get);
export const post = buildMethodDecorator(Method.Post);
export const patch = buildMethodDecorator(Method.Patch);
export const put = buildMethodDecorator(Method.Put);
export const del = buildMethodDecorator(Method.Delete);
