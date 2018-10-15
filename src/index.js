import { SmartHouse } from "../components/Smart House/SmartHouse";
import { Device } from "../components/Device/Device";
import { AirConditioning } from "../components/Air Conditioning/AirConditioning";
import { Tv } from "../components/Tv/Tv";
import { Light } from "../components/Light/Light";
import "./index.scss";
import { RenderTV } from "../components/Tv/tv_view";
import { UIManager } from "../components/UI Manager/UIManager";

const house = new SmartHouse("my house", "NY, 5th AV", "Oleg Shynkarenko");
house.registerDevice(Tv);
house.registerDevice(Light);
house.registerDevice(AirConditioning);

const UI = new UIManager(house);
UI.renderAvailableDevicesSelect();
UI.deviceSelectionHandler();

window.house = house;
/*const tv = new Tv('LG');
const view = new RenderTV(tv, document.getElementById('root'));
window.tv = tv;
window.view = view;
view.render();*/
