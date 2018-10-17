/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Air Conditioning/AirConditioning.js":
/*!********************************************************!*\
  !*** ./components/Air Conditioning/AirConditioning.js ***!
  \********************************************************/
/*! exports provided: AirConditioning, RenderAC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirConditioning", function() { return AirConditioning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderAC", function() { return RenderAC; });
/* harmony import */ var _Device_Device__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Device/Device */ "./components/Device/Device.js");


class AirConditioning extends _Device_Device__WEBPACK_IMPORTED_MODULE_0__["Device"] {
  constructor(name, config) {
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
    //
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

class RenderAC {
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


/***/ }),

/***/ "./components/Device/Device.js":
/*!*************************************!*\
  !*** ./components/Device/Device.js ***!
  \*************************************/
/*! exports provided: Device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return Device; });
class Device {
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


/***/ }),

/***/ "./components/Light/Light.js":
/*!***********************************!*\
  !*** ./components/Light/Light.js ***!
  \***********************************/
/*! exports provided: Light */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Light", function() { return Light; });
/* harmony import */ var _Device_Device__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Device/Device */ "./components/Device/Device.js");


class Light extends _Device_Device__WEBPACK_IMPORTED_MODULE_0__["Device"] {
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


/***/ }),

/***/ "./components/Smart House/SmartHouse.js":
/*!**********************************************!*\
  !*** ./components/Smart House/SmartHouse.js ***!
  \**********************************************/
/*! exports provided: SmartHouse, SmartHouseRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartHouse", function() { return SmartHouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartHouseRender", function() { return SmartHouseRender; });
/* harmony import */ var _Tv_Tv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Tv/Tv */ "./components/Tv/Tv.js");
/* harmony import */ var _Light_Light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Light/Light */ "./components/Light/Light.js");
/* harmony import */ var _Air_Conditioning_AirConditioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Air Conditioning/AirConditioning */ "./components/Air Conditioning/AirConditioning.js");




class SmartHouse {
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
        alert(
          `This device has been already added or you didn't enter device name`
        )
      );
    }
  }
  deleteDeviceByName(name) {
    if (this._devices.has(name)) {
      this._devices.delete(name);
    } else {
      throw new Error(alert(`There is no such device in the list`));
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

class SmartHouseRender {
  constructor(smartHouse) {
    this.smartHouse = smartHouse;
    this.root = document.getElementById("root");
  }

  render() {
    const registerDevice = document.createElement("div");

    const select = document.createElement("select");
    select.setAttribute("id", "select");
    select.className = "select";
    const devices = this.smartHouse._register;
    const defaultOption = document.createElement("option");
    defaultOption.text = "Choose your device";
    select.add(defaultOption, null);

    for (const device of devices) {
      const [name, Device] = device;
      const option = document.createElement("option");

      option.value = Device.getDeviceName();
      option.text = Device.getHumanizedName();
      select.add(option, null);
    }

    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.className = "deviceNameInput";
    const buttonAddDevice = document.createElement("button");
    buttonAddDevice.innerHTML = "Add Device";
    buttonAddDevice.className = "addDeviceBtn";

    select.addEventListener("change", () => {
      const selectIndex = document.getElementById("select").options
        .selectedIndex;
      inputField.value = "";
      registerDevice.appendChild(inputField);
      registerDevice.appendChild(buttonAddDevice);

      if (selectIndex === 0) {
        inputField.remove();
        buttonAddDevice.remove();
      }
    });

    buttonAddDevice.addEventListener("click", () => {
      const selectIndex = document.getElementById("select").options
        .selectedIndex;
      const currentOption = document.getElementById("select").options[
        selectIndex
      ].value;
      const deviceName = inputField.value;
      inputField.value = "";

      switch (currentOption) {
        case "tv-set":
          const newTV = new _Tv_Tv__WEBPACK_IMPORTED_MODULE_0__["Tv"](deviceName);
          this.smartHouse.addNewDevice(newTV);
          const viewTV = new _Tv_Tv__WEBPACK_IMPORTED_MODULE_0__["RenderTV"](
            newTV,
            document.getElementById("root"),
            this.smartHouse
          );
          viewTV.render();
          break;

        case "light":
          const newLight = new _Light_Light__WEBPACK_IMPORTED_MODULE_1__["Light"](deviceName);
          this.smartHouse.addNewDevice(newLight);
          break;

        case "air_conditioning":
          const newAirConditioning = new _Air_Conditioning_AirConditioning__WEBPACK_IMPORTED_MODULE_2__["AirConditioning"](deviceName);
          this.smartHouse.addNewDevice(newAirConditioning);
          const viewAC = new _Air_Conditioning_AirConditioning__WEBPACK_IMPORTED_MODULE_2__["RenderAC"](
            newAirConditioning,
            document.getElementById("root"),
            this.smartHouse
          );
          viewAC.render();
          break;
      }
    });

    registerDevice.appendChild(select);
    this.root.appendChild(registerDevice);
  }
}


/***/ }),

/***/ "./components/Tv/Tv.js":
/*!*****************************!*\
  !*** ./components/Tv/Tv.js ***!
  \*****************************/
/*! exports provided: Tv, RenderTV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tv", function() { return Tv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderTV", function() { return RenderTV; });
/* harmony import */ var _Device_Device__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Device/Device */ "./components/Device/Device.js");


class Tv extends _Device_Device__WEBPACK_IMPORTED_MODULE_0__["Device"] {
  constructor(name) {
    super(name);
    this._name = name;
    this._sources = ["TV antenna", "HDMI", "USB", "PC"];
    this._currentChannel = 1;
    this._minChannelValue = 1;
    this._maxChannelValue = 100;
    this._currentVolume = 10;
    this._minVolume = 0;
    this._maxVolume = 50;
  }

  static getDeviceName() {
    return "tv-set";
  }

  static getHumanizedName() {
    return "TV-Set Device";
  }

  getHumanizedName() {
    return "TV-Set";
  }

  get source() {
    return this._sources;
  }

  get currentSource() {
    return this._currentSource;
  }
  setSource(source) {
    if (this._sources.indexOf(source) !== -1) {
      this._currentSource = source;
    }
  }
  get currentChannel() {
    return this._currentChannel;
  }
  set currentChannel(channel) {
    if (channel >= this._minChannelValue && channel <= this._maxChannelValue) {
      this._currentChannel = channel;
    }
  }
  increaseChannel() {
    this._currentChannel++;
    if (this._currentChannel > this._maxChannelValue) {
      this._currentChannel = 1;
    }
  }
  decreaseChannel() {
    this._currentChannel--;
    if (this._currentChannel < this._minChannelValue) {
      this._currentChannel = 100;
    }
  }
  get currentVolume() {
    return this._currentVolume;
  }

  set currentVolume(value) {
    if (value > this._minVolume && value < this._maxVolume) {
      this._currentVolume = value;
    }
  }

  increaseVolume() {
    if (this._currentVolume < this._maxVolume) {
      this._currentVolume++;
    }
  }
  decreaseVolume() {
    if (this._currentVolume > this._minVolume) {
      this._currentVolume--;
    }
  }
}

class RenderTV {
  constructor(tv, rootElement, SmartHouse) {
    this._tv = tv;
    this._rootElement = rootElement;
    this.SmartHouse = SmartHouse;
  }

  render() {
    const tvContainer = document.createElement("div");
    tvContainer.className = "tv";

    const tvControlsContainer = document.createElement("div");
    tvControlsContainer.className = "tv__controls";

    const powerControls = document.createElement("div");
    powerControls.className = "tv__controls-power";

    const tvVolumeControls = document.createElement("div");
    tvVolumeControls.className = "tv__controls-volume";

    const tvChannelControls = document.createElement("div");
    tvChannelControls.className = "tv__controls-channel";

    let deviceName = document.createElement("div");
    deviceName.innerText = `Device name: ${
      this._tv._name
    } - ${this._tv.getHumanizedName()}`;

    let state = document.createElement("div");
    state.className = "stateField";
    let switchState = () => {
      state.innerText = `Device status: ${
        this._tv.isEnabledStatus ? "On" : "Off"
      }`;
    };

    const setDeviceOn = document.createElement("button");
    setDeviceOn.className = "tv__controls-power-on-btn button";
    setDeviceOn.type = "button";
    setDeviceOn.innerHTML = "ON";
    setDeviceOn.addEventListener("click", () => {
      this._tv.setDeviceOn();
      switchState();
    });

    const setDeviceOff = document.createElement("button");
    setDeviceOff.className = "tv__controls-power-off-btn button";
    setDeviceOff.type = "button";
    setDeviceOff.innerHTML = "OFF";
    setDeviceOff.addEventListener("click", () => {
      this._tv.setDeviceOff();
      switchState();
    });

    let currentVolume = document.createElement("div");
    let showCurrentVolume = () => {
      currentVolume.innerText = `Volume: ${this._tv.currentVolume}`;
    };

    const decreaseVolume = document.createElement("button");
    decreaseVolume.className = "decrease_volume button";
    decreaseVolume.type = "button";
    decreaseVolume.innerHTML = " vol-";
    decreaseVolume.addEventListener("click", () => {
      if (this._tv.isEnabledStatus === true) {
        this._tv.currentVolume = this._tv.decreaseVolume();
        currentVolume.innerText = `Volume: ${this._tv.currentVolume}`;
      }
    });

    const increaseVolume = document.createElement("button");
    increaseVolume.className = "decrease_volume button";
    increaseVolume.type = "button";
    increaseVolume.innerHTML = "vol+";
    increaseVolume.addEventListener("click", () => {
      if (this._tv.isEnabledStatus === true) {
        this._tv.currentVolume = this._tv.increaseVolume();
        currentVolume.innerText = `Volume: ${this._tv.currentVolume}`;
      }
    });

    let currentChannel = document.createElement("div");
    let showCurrentChannel = () => {
      currentChannel.innerText = `Channel: ${this._tv.currentChannel}`;
    };

    const decreaseChannel = document.createElement("button");
    decreaseChannel.className = "decrease_channel button";
    decreaseChannel.type = "button";
    decreaseChannel.innerHTML = "ch-";
    decreaseChannel.addEventListener("click", () => {
      if (this._tv.isEnabledStatus === true) {
        this._tv.currentChannel = this._tv.decreaseChannel();
        currentChannel.innerText = `Channel: ${this._tv.currentChannel}`;
      }
    });

    const increaseChannel = document.createElement("button");
    increaseChannel.className = "decrease_channel button";
    increaseChannel.type = "button";
    increaseChannel.innerHTML = "ch+";
    increaseChannel.addEventListener("click", () => {
      if (this._tv.isEnabledStatus === true) {
        this._tv.currentChannel = this._tv.increaseChannel();
        currentChannel.innerText = `Channel: ${this._tv.currentChannel}`;
      }
    });

    const deleteDeviceButton = document.createElement("button");
    deleteDeviceButton.className = "delete_device-btn button";
    deleteDeviceButton.innerHTML = "Delete Device";
    deleteDeviceButton.addEventListener("click", () => {
      this.SmartHouse.deleteDeviceByName(this._tv._name);
      tvContainer.remove();
    });

    switchState();
    showCurrentVolume();
    showCurrentChannel();
    tvContainer.appendChild(deviceName);

    powerControls.appendChild(state);
    powerControls.appendChild(setDeviceOn);
    powerControls.appendChild(setDeviceOff);

    tvVolumeControls.appendChild(currentVolume);
    tvVolumeControls.appendChild(decreaseVolume);
    tvVolumeControls.appendChild(increaseVolume);

    tvChannelControls.appendChild(currentChannel);
    tvChannelControls.appendChild(decreaseChannel);
    tvChannelControls.appendChild(increaseChannel);

    tvControlsContainer.appendChild(powerControls);
    tvControlsContainer.appendChild(tvVolumeControls);
    tvControlsContainer.appendChild(tvChannelControls);

    tvContainer.appendChild(tvControlsContainer);
    tvContainer.appendChild(deleteDeviceButton);

    this._rootElement.appendChild(tvContainer);
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Smart_House_SmartHouse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Smart House/SmartHouse */ "./components/Smart House/SmartHouse.js");
/* harmony import */ var _components_Air_Conditioning_AirConditioning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Air Conditioning/AirConditioning */ "./components/Air Conditioning/AirConditioning.js");
/* harmony import */ var _components_Tv_Tv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Tv/Tv */ "./components/Tv/Tv.js");
/* harmony import */ var _components_Light_Light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Light/Light */ "./components/Light/Light.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);






const house = new _components_Smart_House_SmartHouse__WEBPACK_IMPORTED_MODULE_0__["SmartHouse"]("my house", "NY, 5th AV", "Oleg Shynkarenko");
house.registerDevice(_components_Tv_Tv__WEBPACK_IMPORTED_MODULE_2__["Tv"]);
house.registerDevice(_components_Light_Light__WEBPACK_IMPORTED_MODULE_3__["Light"]);
house.registerDevice(_components_Air_Conditioning_AirConditioning__WEBPACK_IMPORTED_MODULE_1__["AirConditioning"]);

const smartHouseView = new _components_Smart_House_SmartHouse__WEBPACK_IMPORTED_MODULE_0__["SmartHouseRender"](house);
smartHouseView.render();


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.js.map