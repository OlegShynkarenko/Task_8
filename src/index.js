import { SmartHouse } from "../components/Smart House/SmartHouse";
import { SmartHouseView } from "../components/Smart House/SmartHouseView";
import { AirConditioning } from "../components/Air Conditioning/AirConditioning";
import { Tv } from "../components/Tv/Tv";
import { Light } from "../components/Light/Light";
import "./index.scss";

const house = new SmartHouse(
  "My Smart House",
  "NY, 5th AV",
  "Oleg Shynkarenko"
);
house.registerDevice(Tv);
house.registerDevice(Light);
house.registerDevice(AirConditioning);

const smartHouseView = new SmartHouseView(house);
smartHouseView.render();

window.house = house;
