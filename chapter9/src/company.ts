import { faker } from "@faker-js/faker";
import { Mappable } from "./custom-map";

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: "blue";

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  labelContent = () => `
    <div>
      <h1>${this.name}</h1>
      <p>${this.catchPhrase}</p>
    </div>
  `;
}
