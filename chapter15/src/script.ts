@classDecorator
class Boat {
  @testDecorator
  color: string = "red";

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  // @errorLogger("Oops. An error happened =(")
  pilot(
    @parameterDecorator arg: number,
    @parameterDecorator arg2: number
  ): void {
    throw new Error("Error !");
    console.log("swish");
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log("Class decorator");
  console.log("Constructor:", constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log("ParameterDecorator");
  console.log("Key", key);
  console.log("Index", index);
}

function testDecorator(target: any, key: string) {
  console.log("TestDecorator");
  console.log("Target", target[key]);
  console.log("Key", key);
}

function errorLogger(message: string) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const method = desc.value;
    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(message, e);
      }
    };
  };
}

new Boat();
