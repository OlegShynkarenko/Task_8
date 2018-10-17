import { Device } from "../Device/Device";

export class AirConditioning extends Device {
  constructor(name) {
    super(name);
    this._name = name;
    this._mode = ["COOL", "HEAT", "DRY", "FAN"];
    this._currentTemperature = 20;
    this._minTemperature = 15;
    this._maxTemperature = 30;
    this._currentFanSpeed = 3;
    this._minFanSpeed = 1;
    this._maxFanSpeed = 5;
  }

  static getDeviceName() {
    return "air_conditioning";
  }

  static getHumanizedName() {
    return "Air Conditioning Device";
  }

  getHumanizedName() {
    return "Air Conditioning";
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

  set currentTemperature(temperature) {
    if (
      temperature > this._minTemperature &&
      temperature < this._maxTemperature
    ) {
      this._currentTemperature = temperature;
    }
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

  set currentFanSpeed(speed) {
    if (speed > this._minFanSpeed && speed < this._maxFanSpeed) {
      this._currentFanSpeed = speed;
    }
  }

  increaseFanSpeed() {
    if (this._currentFanSpeed < this._maxFanSpeed) {
      this._currentFanSpeed++;
    }
  }
  decreaseFanSpeed() {
    if (this._currentFanSpeed > this._minFanSpeed) {
      this._currentFanSpeed--;
    }
  }
}

export class RenderAC {
  constructor(airConditioning, rootElement, smartHouse) {
    this._airConditioning = airConditioning;
    this._rootElement = rootElement;
    this.smartHouse = smartHouse;
  }

  render() {
    const airCondContainer = document.createElement("div");
    airCondContainer.className = "ac";

    const airCondControlsContainer = document.createElement("div");
    airCondControlsContainer.className = "ac__controls";

    const powerControls = document.createElement("div");
    powerControls.className = "ac__controls-power";

    const acTemperatureControls = document.createElement("div");
    acTemperatureControls.className = "ac__controls-volume";

    const acFanControls = document.createElement("div");
    acFanControls.className = "ac__controls-channel";

    let deviceName = document.createElement("div");
    deviceName.innerText = `Device name: ${
      this._airConditioning._name
    } - ${this._airConditioning.getHumanizedName()}`;

    let state = document.createElement("div");
    state.className = "stateField";
    let switchState = () => {
      state.innerText = `Device status: ${
        this._airConditioning.isEnabledStatus ? "On" : "Off"
      }`;
    };

    const setDeviceOn = document.createElement("button");
    setDeviceOn.className = "ac__controls-power-on-btn button";
    setDeviceOn.type = "button";
    setDeviceOn.innerHTML = "ON";
    setDeviceOn.addEventListener("click", () => {
      this._airConditioning.setDeviceOn();
      switchState();
    });

    const setDeviceOff = document.createElement("button");
    setDeviceOff.className = "ac__controls-power-off-btn button";
    setDeviceOff.type = "button";
    setDeviceOff.innerHTML = "OFF";
    setDeviceOff.addEventListener("click", () => {
      this._airConditioning.setDeviceOff();
      switchState();
    });

    let currentTemperature = document.createElement("div");
    let showCurrentTemperature = () => {
      currentTemperature.innerText = `Temperature: ${
        this._airConditioning.currentTemperature
      }`;
    };

    const decreaseTemperature = document.createElement("button");
    decreaseTemperature.className = "decrease_temp-btn button";
    decreaseTemperature.type = "button";
    decreaseTemperature.innerHTML = "temp-";
    decreaseTemperature.addEventListener("click", () => {
      if (this._airConditioning.isEnabledStatus === true) {
        this._airConditioning.currentTemperature = this._airConditioning.decreaseTemperature();
        currentTemperature.innerText = `Temperature: ${
          this._airConditioning.currentTemperature
        }`;
      }
    });

    const increaseTemperature = document.createElement("button");
    increaseTemperature.className = "decrease_volume button";
    increaseTemperature.type = "button";
    increaseTemperature.innerHTML = "temp+";
    increaseTemperature.addEventListener("click", () => {
      if (this._airConditioning.isEnabledStatus === true) {
        this._airConditioning.currentTemperature = this._airConditioning.increaseTemperature();
        currentTemperature.innerText = `Temperature: ${
          this._airConditioning.currentTemperature
        }`;
      }
    });

    let currentFanSpeed = document.createElement("div");
    let showCurrentFanSpeed = () => {
      currentFanSpeed.innerText = `Fan Speed: ${
        this._airConditioning.currentFanSpeed
      }`;
    };

    const decreaseFanSpeed = document.createElement("button");
    decreaseFanSpeed.className = "decrease_channel button";
    decreaseFanSpeed.type = "button";
    decreaseFanSpeed.innerHTML = "sp-";
    decreaseFanSpeed.addEventListener("click", () => {
      if (this._airConditioning.isEnabledStatus === true) {
        this._airConditioning.currentFanSpeed = this._airConditioning.decreaseFanSpeed();
        currentFanSpeed.innerText = `Fan Speed: ${
          this._airConditioning.currentFanSpeed
        }`;
      }
    });

    const increaseFanSpeed = document.createElement("button");
    increaseFanSpeed.className = "decrease_channel button";
    increaseFanSpeed.type = "button";
    increaseFanSpeed.innerHTML = "sp+";
    increaseFanSpeed.addEventListener("click", () => {
      if (this._airConditioning.isEnabledStatus === true) {
        this._airConditioning.currentFanSpeed = this._airConditioning.increaseFanSpeed();
        currentFanSpeed.innerText = `Fan Speed: ${
          this._airConditioning.currentFanSpeed
        }`;
      }
    });

    const deleteDeviceButton = document.createElement("button");
    deleteDeviceButton.className = "delete_device-btn button";
    deleteDeviceButton.innerHTML = "Delete Device";
    deleteDeviceButton.addEventListener("click", () => {
      this.smartHouse.deleteDeviceByName(this._airConditioning._name);
      airCondContainer.remove();
    });

    switchState();
    showCurrentTemperature();
    showCurrentFanSpeed();
    airCondContainer.appendChild(deviceName);

    powerControls.appendChild(state);
    powerControls.appendChild(setDeviceOn);
    powerControls.appendChild(setDeviceOff);

    acTemperatureControls.appendChild(currentTemperature);
    acTemperatureControls.appendChild(decreaseTemperature);
    acTemperatureControls.appendChild(increaseTemperature);

    acFanControls.appendChild(currentFanSpeed);
    acFanControls.appendChild(decreaseFanSpeed);
    acFanControls.appendChild(increaseFanSpeed);

    airCondControlsContainer.appendChild(powerControls);
    airCondControlsContainer.appendChild(acTemperatureControls);
    airCondControlsContainer.appendChild(acFanControls);

    airCondContainer.appendChild(airCondControlsContainer);
    airCondContainer.appendChild(deleteDeviceButton);

    this._rootElement.appendChild(airCondContainer);
  }
}
