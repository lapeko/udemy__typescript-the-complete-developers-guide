import { Company } from "./company";
import { User } from "./user";

console.log(new User());
console.log(new Company());

new google.maps.Map(document.getElementById("map") as HTMLDivElement, {
  zoom: 1,
  center: {
    lat: 1,
    lng: 1,
  },
});
