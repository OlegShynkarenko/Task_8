import { Tv } from "../Tv/Tv";
import { Light } from "../Light/Light";
import { AirConditioning } from "../Air Conditioning/AirConditioning";

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
