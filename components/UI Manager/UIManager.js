import { SmartHouse } from "../Smart House/SmartHouse";
import { Tv } from "../Tv/Tv";
import { Light } from "../Light/Light";
import { AirConditioning } from "../Air Conditioning/AirConditioning";
import { RenderTV } from "../Tv/tv_view";

export class UIManager {
  constructor(SmartHouse) {
    this.SmartHouse = SmartHouse;
    this.root = document.getElementById("root");
  }

  renderAvailableDevicesSelect() {
    const select = document.createElement("select");
    select.setAttribute("id", "select");
    select.className = "select";
    const devices = this.SmartHouse._register;
    const defaultOption = document.createElement("option");
    defaultOption.text = "Choose your device";
    select.add(defaultOption, null);

    for (const device of devices) {
      const [name, Device] = device;
      const option = document.createElement("option");

      option.value = Device.getDeviceName();
      option.text = Device.getHumanizedName();
      select.add(option, null);
    }

    this.root.appendChild(select);
  }

  deviceSelectionHandler() {
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.className = "deviceNameInput";
    const buttonAddDevice = document.createElement("button");
    buttonAddDevice.innerHTML = "Add Device";
    buttonAddDevice.className = "addDeviceBtn";

    select.addEventListener("change", () => {
      const selectIndex = document.getElementById("select").options
        .selectedIndex;
      inputField.value = "";
      this.root.appendChild(inputField);
      this.root.appendChild(buttonAddDevice);

      if (selectIndex === 0) {
        inputField.remove();
        buttonAddDevice.remove();
      }
    });

    buttonAddDevice.addEventListener("click", () => {
      const selectIndex = document.getElementById("select").options
        .selectedIndex;
      const currentOption = document.getElementById("select").options[
        selectIndex
      ].value;
      const deviceName = inputField.value;

      switch (currentOption) {
        case "tv-set":
          const newTV = new Tv(deviceName);
          this.SmartHouse.addNewDevice(newTV);
          const view = new RenderTV(newTV, document.getElementById("root"));
          view.render();
          break;

        case "light":
          const newLight = new Light(deviceName);
          this.SmartHouse.addNewDevice(newLight);
          break;

        case "air_conditioning":
          const newAirConditioning = new AirConditioning(deviceName);
          this.SmartHouse.addNewDevice(newAirConditioning);
      }
    });
  }

  /*handleAddDevice() {
        listen click on button and add device
        this.SmartHouse.addNewDevice(...)
    }*/
}
