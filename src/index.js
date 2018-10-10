import { SmartHouse } from "../components/SmartHouse";
import { Device } from "../components/Device";
import { AirConditioning } from "../components/AirConditioning";
import { Tv } from "../components/Tv";
import { Light } from "../components/Light";

const house = new SmartHouse("my house", "kharkiv");
window.house = house;
house.addNewTV(new Tv("Television", "Sony"));
house.addNewLight(new Light("Wall lamp", "Phillips"));
house.addNewAirCond(new AirConditioning("AirConditioner", "C&H"));
