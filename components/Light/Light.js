import { Device } from "../Device/Device";

export class Light extends Device {
  constructor(name, config) {
    super(name);
    const defaultConfig = {
      currentColorTemperature: 3000,
      minColorTemperature: 2000,
      maxColorTemperature: 6500,
      currentBrightness: 5,
      minBrightness: 1,
      maxBrightness: 10
    };
    this.config = Object.assign({}, defaultConfig, config);
  }

  static getDeviceName() {
    return "light";
  }

  static getHumanizedName() {
    return "Light Device";
  }

  getConfig() {
    return this.config;
  }

  get type() {
    return this._type;
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
