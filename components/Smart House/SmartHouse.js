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
    this._devicesChangesListener = null;
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

  set devicesChangesListener(fn) {
    this._devicesChangesListener = fn;
  }

  registerDevice(device) {
    const name = device.getDeviceName();
    this._register.set(name, device);
  }

  addNewDevice(device) {
    if (this._devices.has(device._name) === false && device._name) {
      this._devices.set(device._name, device);

      if (this._devicesChangesListener) {
        this._devicesChangesListener(this._devices);
      }
    } else {
      throw new Error(
        alert(
          `This device has been already added or you didn't enter device name`
        )
      );
    }
  }

  deleteDeviceByName(name) {
    if (this._devices.has(name)) {
      this._devices.delete(name);

      if (this._devicesChangesListener) {
        this._devicesChangesListener(this._devices);
      }
    } else {
      throw new Error(`There is no such device in the list`);
    }
  }

  deleteAllDevices() {
    this._devices.clear();
  }
  getAllDevices() {
    return this._devices;
  }
  showDeviceByName(name) {
    return this._devices.get(name);
  }
}

export class SmartHouseRender {
  constructor(smartHouse, tv) {
    this.smartHouse = smartHouse;
    this.root = document.getElementById("root");
    this._tv = tv;

    this.smartHouse.devicesChangesListener = devices => {
      this._renderDevices(devices);
    };
  }

  _addDevice(deviceType, deviceName) {
    let newDevice;
    switch (deviceType) {
      case "tv-set":
        newDevice = new Tv(deviceName);
        this.smartHouse.addNewDevice(newDevice);
        break;

      case "light":
        newDevice = new Light(deviceName);
        this.smartHouse.addNewDevice(newDevice);
        break;

      case "air_conditioning":
        newDevice = new AirConditioning(deviceName);
        this.smartHouse.addNewDevice(newDevice);
        break;
    }
    this._renderDevices();
  }

  render() {
    this._renderSelect();
    this._renderDevices();
  }

  _renderSelect() {
    const registerDevice = document.createElement("div");
    registerDevice.className = "addNewDeviceContainer";

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

      this._addDevice(currentOption, deviceName);
    });
    registerDevice.appendChild(select);
    this.root.appendChild(registerDevice);
  }

  _renderDevices() {
    let devicesList = this.root.querySelector(".devicesList");

    if (devicesList) {
      devicesList.innerHTML = "";
    } else {
      devicesList = document.createElement("div");
      devicesList.className = "devicesList";
      this.root.appendChild(devicesList);
    }

    const devices = this.smartHouse.getAllDevices();

    devices.forEach(device => {
      if (device instanceof Tv) {
        const viewTV = new RenderTV(
          device,
          document.querySelector(".devicesList"),
          this.smartHouse
        );
        viewTV.render();
      }

      if (device instanceof Light) {
      }

      if (device instanceof AirConditioning) {
        const viewAC = new RenderAC(
          device,
          document.querySelector(".devicesList"),
          this.smartHouse
        );
        viewAC.render();
      }
    });
  }
}
