import "reflect-metadata";

@showMetadata()
class Car {
    @markMethod("Some secret")
    drive() {
        console.log('Wroom');
    }
}

function markMethod(secret: string) {
    return (target: any, key: string) => Reflect.defineMetadata('secret', secret, target, key)
};

function showMetadata() {
    return (target: typeof Car) => Object.getOwnPropertyNames(Car.prototype).filter(key => key !== "constructor")
        .forEach(methodName => console.log(Reflect.getMetadata('secret', target.prototype, methodName)));
}