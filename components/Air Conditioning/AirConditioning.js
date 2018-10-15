import { Device } from "../Device/Device";

export class AirConditioning extends Device {
  constructor(name, config) {
    super(name);
    this._name = name;
    this._mode = ["COOL", "HEAT", "DRY", "FAN"];
    const defaultConfig = {
      currentTemperature: 20,
      minTemperature: 15,
      maxTemperature: 30,
      currentFanSpeed: 3,
      minFanSpeed: 1,
      maxFanSpeed: 5
    };
    this.config = Object.assign({}, defaultConfig, config);
  }

  static getDeviceName() {
    //
    return "air_conditioning";
  }

  static getHumanizedName() {
    return "Air Conditioning Device";
  }

  getConfig() {
    return this.config;
  }

  set currentTemperature(temperature) {
    if (temperature < 10) {
      this._currentTemperature = 10;

      return;
    }

    this._currentTemperature = temperature;
  }

  get fanSpeed() {
    return this._currentFanSpeed;
  }

  get currentMode() {
    return this._currentMode;
  }
  setSource(source) {
    if (this._mode.indexOf(source) !== -1) {
      this._currentMode = source;
    }
  }

  get currentTemperature() {
    return this._currentTemperature;
  }

  increaseTemperature() {
    if (this._currentTemperature < this._maxTemperature) {
      this._currentTemperature++;
    }
  }
  decreaseTemperature() {
    if (this._currentTemperature > this._minTemperature) {
      this._currentTemperature--;
    }
  }
  get currentFanSpeed() {
    return this._currentFanSpeed;
  }
  increaseFanSpeed() {
    if (this._currentFanSpeed < this._maxFanSpeed) {
      this._currentFanSpeed++;
    }
  }
  decreaseTemperature() {
    if (this._currentFanSpeed > this._minFanSpeed) {
      this._currentFanSpeed--;
    }
  }
}
