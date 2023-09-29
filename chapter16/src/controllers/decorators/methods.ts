import "reflect-metadata";
import { Method } from "../../model";

const buildMethodDecorator = (method: Method) => (path: string) =>
    (target: any, key: string, descriptor: PropertyDescriptor) => {
        Reflect.defineMetadata('path', path, target.constructor.prototype, key);
        Reflect.defineMetadata('method', method, target.constructor.prototype, key);
    }

export const get = buildMethodDecorator(Method.Get);
export const post = buildMethodDecorator(Method.Post);
export const patch = buildMethodDecorator(Method.Patch);
export const put = buildMethodDecorator(Method.Put);
const _delete = buildMethodDecorator(Method.Delete);

export { _delete as delete };
