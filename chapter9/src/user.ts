import { faker } from "@faker-js/faker";
import { Mappable } from "./custom-map";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: "red";

  constructor() {
    this.name = `${faker.person.firstName()} ${faker.person.lastName()}`;
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  labelContent = () => `<h1>${this.name}<h1>`;
}
