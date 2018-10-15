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
        `This device has been already added or you didn't enter device name.`
      );
    }
  }
  deleteDeviceByName(name) {
    if (this._devices.has(name)) {
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
