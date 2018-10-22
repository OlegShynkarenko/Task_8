export class Device {
  constructor(name) {
    this._name = name;
    this._isEnabled = false;
  }
  get name() {
    return (this._name = name);
  }

  get isEnabledStatus() {
    return this._isEnabled;
  }

  setDeviceOn() {
    if (!this._isEnabled) {
      this._isEnabled = true;
    }
  }
  setDeviceOff() {
    if (this._isEnabled) {
      this._isEnabled = false;
    }
  }
}
