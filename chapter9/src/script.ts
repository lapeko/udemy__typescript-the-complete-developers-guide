import { CustomMap } from "./custom-map";
import { User } from "./user";
import { Company } from "./company";

const map = new CustomMap("map");
map.addMarker(new User());
map.addMarker(new Company());
