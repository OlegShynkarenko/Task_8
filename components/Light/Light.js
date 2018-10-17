import { Device } from "../Device/Device";

export class Light extends Device {
  constructor(name) {
    super(name);
    this._currentColorTemperature = 3000;
    this._minColorTemperature = 2000;
    this._maxColorTemperature = 6500;
    this._currentBrightness = 5;
    this._minBrightness = 1;
    this._maxBrightness = 10;
  }

  static getDeviceName() {
    return "light";
  }

  static getHumanizedName() {
    return "Light Device";
  }

  get currentColorTemperature() {
    return this._currentColorTemperature;
  }
  get minColorTemperature() {
    return this._minColorTemperature;
  }
  get maxColorTemperature() {
    return this._maxColorTemperature;
  }
  increaseColorTemperature() {
    if (this._currentColorTemperature < this._maxColorTemperature) {
      this._currentColorTemperature++;
    }
  }
  decreaseColorTemperature() {
    if (this._currentColorTemperature > this._minColorTemperature) {
      this._currentColorTemperature--;
    }
  }
  get currentBrightness() {
    return this._currentBrightness;
  }
  increaseBrightness() {
    if (this._currentBrightness < this._maxBrightness) {
      this._currentBrightness++;
    }
  }
  decreaseBrightness() {
    if (this._currentBrightness > this._minBrightness) {
      this._currentBrightness--;
    }
  }
  setNightMode() {
    this._currentColorTemperature = 6500;
    this._currentBrightness = 1;
  }
}
