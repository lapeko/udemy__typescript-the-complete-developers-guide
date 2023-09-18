class Boat {
  color: string = "red";

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @errorLogger("Oops. An error happened =(")
  pilot(): void {
    throw new Error("Error !");
    console.log("swish");
  }
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

new Boat().pilot();
