export class SmartHouse {
  constructor(name, address, owner) {
    this._name = name;
    this._address = address;
    this._owner = owner;
    this._devices = new Map();
  }

  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  get address() {
    return this._address;
  }
  set address(address) {
    this._address = address;
  }
  get owner() {
    return this._owner;
  }
  set owner(owner) {
    this._owner = owner;
  }

  addNewDevice(device) {
    if (this._devices.has(device._name) === false) {
      this._devices.set(`${device._name}`, device);
    } else {
      return `This device has been already added.`;
    }
  }
  deleteDeviceByName(device) {
    if (this._devices.has(device)) {
      this._devices.delete(device);
    } else {
      return `There is no such device in the list`;
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
