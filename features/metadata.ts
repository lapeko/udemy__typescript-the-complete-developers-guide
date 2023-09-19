import "reflect-metadata";

const testObject = {
    data: "Some data"
}

Reflect.defineMetadata("secret", 1234, testObject);

console.log({ testObject });
console.log('testObject.secret:', (testObject as any).secret);

const secret = Reflect.getMetadata("secret", testObject)

console.log({ secret });

Reflect.defineMetadata('additionalMetadata', "more data", testObject, "data");
const additionalData = Reflect.getMetadata('additionalMetadata', testObject, "data");

console.log({ testObject })
console.log({ additionalData });