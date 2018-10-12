import { Device } from "./Device";

export class AirConditioning extends Device {
  constructor(
    name,
    mode = ["COOL", "HEAT", "DRY", "FAN"], // нужно вписать изменение режима
    currentMode = mode[0],
    currentTemperature = 20,
    minTemperature = 15,
    maxTemperature = 30,
    currentFanSpeed = 3,
    minFanSpeed = 1,
    maxFanSpeed = 5
  ) {
    super(name);
    this._name = name;
    this._mode = mode;
    this._currentMode = currentMode;
    this._currentTemperature = currentTemperature;
    this._minTemperature = minTemperature;
    this._maxTemperature = maxTemperature;
    this._currentFanSpeed = currentFanSpeed;
    this._minFanSpeed = minFanSpeed;
    this._maxFanSpeed = maxFanSpeed;
  }

  get type() {
    return this._type;
  }

  get fanSpeed() {
    return this._fanSpeed;
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
