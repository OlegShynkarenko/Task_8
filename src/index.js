import {
  SmartHouse,
  SmartHouseRender
} from "../components/Smart House/SmartHouse";
import { AirConditioning } from "../components/Air Conditioning/AirConditioning";
import { Tv } from "../components/Tv/Tv";
import { Light } from "../components/Light/Light";
import "./index.scss";

const house = new SmartHouse("my house", "NY, 5th AV", "Oleg Shynkarenko");
house.registerDevice(Tv);
house.registerDevice(Light);
house.registerDevice(AirConditioning);

const smartHouseView = new SmartHouseRender(house);
smartHouseView.render();
