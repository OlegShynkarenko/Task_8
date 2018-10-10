export class Device {
  constructor(name) {
    this._name = name;
    this._isEnabled = false;
  }
  get name() {
    this._name = name;
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
