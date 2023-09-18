@classDecorator
class Boat {
  color: string = "red";

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @testDecorator
  pilot(): void {
    console.log("swish");
  }
}

function classDecorator(constructor: Function) {
  console.log(constructor);
}

function testDecorator(target: any, key: string) {
  console.log("target:", target);
  console.log("key:", key);
}
