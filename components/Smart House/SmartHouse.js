import { RenderTV, Tv } from "../Tv/Tv";
import { Light } from "../Light/Light";
import { AirConditioning, RenderAC } from "../Air Conditioning/AirConditioning";

export class SmartHouse {
  constructor(name, address, owner) {
    this._name = name;
    this._address = address;
    this._owner = owner;
    this._devices = new Map();
    this._register = new Map();
  }

  get name() {
    return this._name;
  }
  get address() {
    return this._address;
  }
  get owner() {
    return this._owner;
  }

  get register() {
    return this._register;
  }

  registerDevice(device) {
    // Get Class like Light / Tv / AirConditioning
    const name = device.getDeviceName();
    this._register.set(name, device);
  }

  addNewDevice(device) {
    if (this._devices.has(device._name) === false && device._name) {
      this._devices.set(device._name, device);
    } else {
      throw new Error(
        alert(
          `This device has been already added or you didn't enter device name`
        )
      );
    }
  }
  deleteDeviceByName(name) {
    let confirmQuestion = confirm(
      "Are you sure that you want to delete this device?"
    );
    if (this._devices.has(name) && confirmQuestion === true) {
      this._devices.delete(name);
    } else {
      throw new Error(`There is no such device in the list`);
    }
  }
  deleteAllDevices() {
    this._devices.clear();
  }
  showAllDevices() {
    return this._devices;
  }
  showDeviceByName(name) {
    return this._devices.get(name);
  }
}

export class SmartHouseRender {
  constructor(smartHouse) {
    this.smartHouse = smartHouse;
    this.root = document.getElementById("root");
  }

  render() {
    const registerDevice = document.createElement("div");

    const select = document.createElement("select");
    select.setAttribute("id", "select");
    select.className = "select";
    const devices = this.smartHouse._register;
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

    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.placeholder = "Enter device name";
    inputField.className = "deviceNameInput";
    const buttonAddDevice = document.createElement("button");
    buttonAddDevice.innerHTML = "Add Device";
    buttonAddDevice.className = "addDeviceBtn";

    select.addEventListener("change", () => {
      const selectIndex = document.getElementById("select").options
        .selectedIndex;
      inputField.value = "";
      registerDevice.appendChild(inputField);
      registerDevice.appendChild(buttonAddDevice);

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
      inputField.value = "";

      switch (currentOption) {
        case "tv-set":
          const newTV = new Tv(deviceName);
          this.smartHouse.addNewDevice(newTV);
          const viewTV = new RenderTV(
            newTV,
            document.getElementById("root"),
            this.smartHouse
          );
          viewTV.render();
          break;

        case "light":
          const newLight = new Light(deviceName);
          this.smartHouse.addNewDevice(newLight);
          break;

        case "air_conditioning":
          const newAirConditioning = new AirConditioning(deviceName);
          this.smartHouse.addNewDevice(newAirConditioning);
          const viewAC = new RenderAC(
            newAirConditioning,
            document.getElementById("root"),
            this.smartHouse
          );
          viewAC.render();
          break;
      }
    });

    registerDevice.appendChild(select);
    this.root.appendChild(registerDevice);
  }
}
