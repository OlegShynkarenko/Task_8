import { Tv } from "../Tv/Tv";
import { Light } from "../Light/Light";
import { AirConditioning } from "../Air Conditioning/AirConditioning";
import { SmartHouse } from "./SmartHouse";

export class SmartHouseView {
  constructor(smartHouse) {
    this.smartHouse = smartHouse;
    this.root = document.getElementById("root");

    this.smartHouse.devicesChangesListener = devices => {
      this._renderDevices(devices);
    };
  }

  _addDevice(deviceType, deviceName) {
    let newDevice;
    switch (deviceType) {
      case "tv-set":
        newDevice = new Tv(deviceName);
        this.smartHouse.addNewDevice(newDevice);
        break;

      case "light":
        newDevice = new Light(deviceName);
        this.smartHouse.addNewDevice(newDevice);
        break;

      case "air_conditioning":
        newDevice = new AirConditioning(deviceName);
        this.smartHouse.addNewDevice(newDevice);
        break;
    }
    this.render();
  }

  render() {
    this.root.innerHTML = "";
    this._renderSelect();
    this._renderDevices();
  }

  _renderSelect() {
    const registerDevice = document.createElement("div");
    registerDevice.className = "addNewDeviceContainer";

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
    inputField.placeholder = "Enter device name";
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

      this._addDevice(currentOption, deviceName);
      this.render();
    });

    const deleteAllDevices = document.createElement("button");
    deleteAllDevices.innerHTML = "Delete all devices";
    deleteAllDevices.setAttribute("id", "deleteAllDevices");
    deleteAllDevices.className = "delete_all_devices_btn button";

    if (this.smartHouse._devices.size > 1) {
      registerDevice.appendChild(deleteAllDevices);
      registerDevice.appendChild(deleteAllDevices);

      deleteAllDevices.addEventListener("click", () => {
        let confirmQuestion = confirm(
          "Are you sure that you want to delete all your devices?"
        );
        if (confirmQuestion === true) {
          this.smartHouse.deleteAllDevices();
          this.render();
        }
      });
    }

    const smartHouseInfo = document.createElement("div");
    const houseName = document.createElement("div");
    houseName.innerText = this.smartHouse._name;
    houseName.style.fontSize = "2rem";
    houseName.style.marginBottom = "1rem";

    const houseOwner = document.createElement("div");
    houseOwner.innerText = `Owner: ${this.smartHouse._owner}`;
    houseOwner.style.fontSize = "2rem";
    houseOwner.style.marginBottom = "1rem";

    smartHouseInfo.appendChild(houseName);
    smartHouseInfo.appendChild(houseOwner);
    registerDevice.appendChild(smartHouseInfo);
    registerDevice.appendChild(select);
    this.root.appendChild(registerDevice);
  }

  _renderDevices() {
    let devicesList = this.root.querySelector(".devicesList");

    if (devicesList) {
      devicesList.innerHTML = "";
    } else {
      devicesList = document.createElement("div");
      devicesList.className = "devicesList";
      this.root.appendChild(devicesList);
    }

    const devices = this.smartHouse.getAllDevices();

    setTimeout(() => {
      devices.forEach(device => {
        if (device instanceof Tv) {
          const tvContainer = document.createElement("div");
          tvContainer.className = "tv";

          const topControlsContainer = document.createElement("div");
          topControlsContainer.className = "tv__topControlsContainer";

          const sourcesContainer = document.createElement("div");
          sourcesContainer.className = "sources";

          const currentSource = document.createElement("div");
          currentSource.innerText = `${device.currentSource}`;

          const sleepTimerContainer = document.createElement("div");
          sleepTimerContainer.className = "sleepTimerContainer";

          const sleepField = document.createElement("input");
          sleepField.className = "sleepField";
          sleepField.type = "text";
          sleepField.style.display = "block";
          sleepField.style.width = "15rem";

          const sleepButton = document.createElement("button");
          sleepButton.className = "button";
          sleepButton.type = "button";
          sleepButton.innerHTML = "Sleep";
          sleepButton.style.width = "15.1rem";
          sleepButton.addEventListener("click", () => {
            if (device.isEnabledStatus === true) {
              let timerValue = Math.round(sleepField.value) * 1000;

              if (isNaN(timerValue) === false) {
                alert(`Your device will sleep in ${timerValue / 1000} seconds`);
                setTimeout(() => {
                  device.setDeviceOff();
                  this.render();
                }, timerValue);
              } else {
                alert("Please enter a number.");
              }
            }
          });

          const tvControlsContainer = document.createElement("div");
          tvControlsContainer.className = "tv__controls";

          const powerControls = document.createElement("div");
          powerControls.className = "tv__controls-power";

          const tvVolumeControls = document.createElement("div");
          tvVolumeControls.className = "tv__controls-volume";

          const tvChannelControls = document.createElement("div");
          tvChannelControls.className = "tv__controls-channel";

          let deviceType = document.createElement("div");
          deviceType.innerText = `Device type: ${device.getHumanizedName()}`;

          let deviceName = document.createElement("div");
          deviceName.innerText = `Device name: ${device._name}`;

          let state = document.createElement("div");
          state.className = "stateField";

          state.innerText = `Device status: ${
            device.isEnabledStatus ? "On" : "Off"
          }`;

          const sourcesButton = document.createElement("button");
          sourcesButton.className = "button";
          sourcesButton.type = "button";
          sourcesButton.innerHTML = "Sources";
          sourcesButton.addEventListener("click", () => {
            if (device.isEnabledStatus === true) {
              device.currentSource = device.switchSource();
              currentSource.innerText = `${device.currentSource}`;
              this.render();
            }
          });

          const setDeviceOn = document.createElement("button");
          setDeviceOn.className = "tv__controls-power-on-btn button";
          setDeviceOn.type = "button";
          setDeviceOn.innerHTML = "ON";
          setDeviceOn.addEventListener("click", () => {
            device.setDeviceOn();
            this.render();
          });

          const setDeviceOff = document.createElement("button");
          setDeviceOff.className = "tv__controls-power-off-btn button";
          setDeviceOff.type = "button";
          setDeviceOff.innerHTML = "OFF";
          setDeviceOff.addEventListener("click", () => {
            device.setDeviceOff();
            this.render();
          });

          let currentVolume = document.createElement("div");
          currentVolume.innerText = `Volume: ${device.currentVolume}`;

          const decreaseVolume = document.createElement("button");
          decreaseVolume.className = "decrease_volume button";
          decreaseVolume.type = "button";
          decreaseVolume.innerHTML = " vol-";
          decreaseVolume.addEventListener("click", () => {
            if (device.isEnabledStatus === true) {
              device.currentVolume = device.decreaseVolume();
              currentVolume.innerText = `Volume: ${device.currentVolume}`;
              this.render();
            }
          });

          const increaseVolume = document.createElement("button");
          increaseVolume.className = "decrease_volume button";
          increaseVolume.type = "button";
          increaseVolume.innerHTML = "vol+";
          increaseVolume.addEventListener("click", () => {
            if (device.isEnabledStatus === true) {
              device.currentVolume = device.increaseVolume();
              currentVolume.innerText = `Volume: ${device.currentVolume}`;
              this.render();
            }
          });

          let currentChannel = document.createElement("div");
          currentChannel.innerText = `Channel: ${device.currentChannel}`;

          const decreaseChannel = document.createElement("button");
          decreaseChannel.className = "decrease_channel button";
          decreaseChannel.type = "button";
          decreaseChannel.innerHTML = "ch-";
          decreaseChannel.addEventListener("click", () => {
            if (device.isEnabledStatus === true) {
              device.currentChannel = device.decreaseChannel();
              currentChannel.innerText = `Channel: ${device.currentChannel}`;
              this.render();
            }
          });

          const increaseChannel = document.createElement("button");
          increaseChannel.className = "decrease_channel button";
          increaseChannel.type = "button";
          increaseChannel.innerHTML = "ch+";
          increaseChannel.addEventListener("click", () => {
            if (device.isEnabledStatus === true) {
              device.currentChannel = device.increaseChannel();
              currentChannel.innerText = `Channel: ${device.currentChannel}`;
              this.render();
            }
          });

          const deleteDeviceButton = document.createElement("button");
          deleteDeviceButton.className = "delete_device-btn button";
          deleteDeviceButton.innerHTML = "Delete Device";
          deleteDeviceButton.addEventListener("click", () => {
            let confirmQuestion = confirm(
              "Are you sure that you want to delete this device?"
            );
            if (confirmQuestion === true) {
              this.smartHouse.deleteDeviceByName(device._name);
              this.render();
            }
          });

          tvContainer.appendChild(deviceType);
          tvContainer.appendChild(deviceName);

          topControlsContainer.appendChild(sourcesContainer);
          sourcesContainer.appendChild(currentSource);
          sourcesContainer.appendChild(sourcesButton);

          topControlsContainer.appendChild(sleepTimerContainer);
          sleepTimerContainer.appendChild(sleepField);
          sleepTimerContainer.appendChild(sleepButton);

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

          tvContainer.appendChild(topControlsContainer);
          tvContainer.appendChild(tvControlsContainer);
          tvContainer.appendChild(deleteDeviceButton);

          devicesList.appendChild(tvContainer);
        }

        if (device instanceof Light) {
          const lightContainer = document.createElement("div");
          lightContainer.className = "light";

          const lightControlsContainer = document.createElement("div");
          lightControlsContainer.className = "light__controls";

          const powerControls = document.createElement("div");
          powerControls.className = "light__controls-power";

          const lightBrightnessControls = document.createElement("div");
          lightBrightnessControls.className = "light__controls-brightness";

          const lightColorTempControls = document.createElement("div");
          lightColorTempControls.className = "light__controls-color-temp";

          let deviceType = document.createElement("div");
          deviceType.innerText = `Device type: ${device.getHumanizedName()}`;

          let deviceName = document.createElement("div");
          deviceName.innerText = `Device name: ${device._name}`;

          let state = document.createElement("div");
          state.className = "stateField";

          state.innerText = `Device status: ${
            device.isEnabledStatus ? "On" : "Off"
          }`;

          const setDeviceOn = document.createElement("button");
          setDeviceOn.className = "light__controls-power-on-btn button";
          setDeviceOn.type = "button";
          setDeviceOn.innerHTML = "ON";
          setDeviceOn.addEventListener("click", () => {
            device.setDeviceOn();
            this.render();
          });

          const setDeviceOff = document.createElement("button");
          setDeviceOff.className = "light__controls-power-off-btn button";
          setDeviceOff.type = "button";
          setDeviceOff.innerHTML = "OFF";
          setDeviceOff.addEventListener("click", () => {
            device.setDeviceOff();
            this.render();
          });

          let currentBrightness = document.createElement("div");
          currentBrightness.innerText = `Brightness: ${
            device.currentBrightness
          }`;

          const decreaseBrightness = document.createElement("button");
          decreaseBrightness.className = "decrease_brightness button";
          decreaseBrightness.type = "button";
          decreaseBrightness.innerHTML = " br-";
          decreaseBrightness.addEventListener("click", () => {
            if (device.isEnabledStatus === true) {
              device.currentBrightness = device.decreaseBrightness();
              currentBrightness.innerText = `Brightness: ${
                device.currentBrightness
              }`;
              this.render();
            }
          });

          const increaseBrightness = document.createElement("button");
          increaseBrightness.className = "decrease_brightness button";
          increaseBrightness.type = "button";
          increaseBrightness.innerHTML = "br+";
          increaseBrightness.addEventListener("click", () => {
            if (device.isEnabledStatus === true) {
              device.currentBrightness = device.increaseBrightness();
              currentBrightness.innerText = `Brightness: ${
                device.currentBrightness
              }`;
              this.render();
            }
          });

          let currentColorTemperature = document.createElement("div");
          currentColorTemperature.innerText = `Color temperature: ${
            device.currentColorTemperature
          }`;

          const decreaseColorTemperature = document.createElement("button");
          decreaseColorTemperature.className = "decrease_channel button";
          decreaseColorTemperature.type = "button";
          decreaseColorTemperature.innerHTML = "ct-";
          decreaseColorTemperature.addEventListener("click", () => {
            if (device.isEnabledStatus === true) {
              device.currentColorTemperature = device.decreaseColorTemperature();
              currentColorTemperature.innerText = `Color temperature: ${
                device.currentColorTemperature
              }`;
              this.render();
            }
          });

          const increaseColorTemperature = document.createElement("button");
          increaseColorTemperature.className = "decrease_channel button";
          increaseColorTemperature.type = "button";
          increaseColorTemperature.innerHTML = "ct+";
          increaseColorTemperature.addEventListener("click", () => {
            if (device.isEnabledStatus === true) {
              device.currentColorTemperature = device.increaseColorTemperature();
              currentColorTemperature.innerText = `Color temperature: ${
                device.currentColorTemperature
              }`;
              this.render();
            }
          });

          const deleteDeviceButton = document.createElement("button");
          deleteDeviceButton.className = "delete_device-btn button";
          deleteDeviceButton.innerHTML = "Delete Device";
          deleteDeviceButton.addEventListener("click", () => {
            let confirmQuestion = confirm(
              "Are you sure that you want to delete this device?"
            );
            if (confirmQuestion === true) {
              this.smartHouse.deleteDeviceByName(device._name);
              this.render();
            }
          });

          lightContainer.appendChild(deviceType);
          lightContainer.appendChild(deviceName);

          powerControls.appendChild(state);
          powerControls.appendChild(setDeviceOn);
          powerControls.appendChild(setDeviceOff);

          lightBrightnessControls.appendChild(currentBrightness);
          lightBrightnessControls.appendChild(decreaseBrightness);
          lightBrightnessControls.appendChild(increaseBrightness);

          lightColorTempControls.appendChild(currentColorTemperature);
          lightColorTempControls.appendChild(decreaseColorTemperature);
          lightColorTempControls.appendChild(increaseColorTemperature);

          lightControlsContainer.appendChild(powerControls);
          lightControlsContainer.appendChild(lightBrightnessControls);
          lightControlsContainer.appendChild(lightColorTempControls);

          lightContainer.appendChild(lightControlsContainer);
          lightContainer.appendChild(deleteDeviceButton);

          devicesList.appendChild(lightContainer);
        }

        if (device instanceof AirConditioning) {
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

          let deviceType = document.createElement("div");
          deviceType.innerText = `Device type: ${device.getHumanizedName()}`;

          let deviceName = document.createElement("div");
          deviceName.innerText = `Device name: ${device._name}`;

          let state = document.createElement("div");
          state.className = "stateField";
          state.innerText = `Device status: ${
            device.isEnabledStatus ? "On" : "Off"
          }`;

          const setDeviceOn = document.createElement("button");
          setDeviceOn.className = "ac__controls-power-on-btn button";
          setDeviceOn.type = "button";
          setDeviceOn.innerHTML = "ON";
          setDeviceOn.addEventListener("click", () => {
            device.setDeviceOn();
            this.render();
          });

          const setDeviceOff = document.createElement("button");
          setDeviceOff.className = "ac__controls-power-off-btn button";
          setDeviceOff.type = "button";
          setDeviceOff.innerHTML = "OFF";
          setDeviceOff.addEventListener("click", () => {
            device.setDeviceOff();
            this.render();
          });

          let currentTemperature = document.createElement("div");
          currentTemperature.innerText = `Temperature: ${
            device.currentTemperature
          }`;

          const decreaseTemperature = document.createElement("button");
          decreaseTemperature.className = "decrease_temp-btn button";
          decreaseTemperature.type = "button";
          decreaseTemperature.innerHTML = "temp-";
          decreaseTemperature.addEventListener("click", () => {
            if (device.isEnabledStatus === true) {
              device.currentTemperature = device.decreaseTemperature();
              currentTemperature.innerText = `Temperature: ${
                device.currentTemperature
              }`;
              this.render();
            }
          });

          const increaseTemperature = document.createElement("button");
          increaseTemperature.className = "decrease_volume button";
          increaseTemperature.type = "button";
          increaseTemperature.innerHTML = "temp+";
          increaseTemperature.addEventListener("click", () => {
            if (device.isEnabledStatus === true) {
              device.currentTemperature = device.increaseTemperature();
              currentTemperature.innerText = `Temperature: ${
                device.currentTemperature
              }`;
              this.render();
            }
          });

          let currentFanSpeed = document.createElement("div");
          currentFanSpeed.innerText = `Fan Speed: ${device.currentFanSpeed}`;

          const decreaseFanSpeed = document.createElement("button");
          decreaseFanSpeed.className = "decrease_channel button";
          decreaseFanSpeed.type = "button";
          decreaseFanSpeed.innerHTML = "sp-";
          decreaseFanSpeed.addEventListener("click", () => {
            if (device.isEnabledStatus === true) {
              device.currentFanSpeed = device.decreaseFanSpeed();
              currentFanSpeed.innerText = `Fan Speed: ${
                device.currentFanSpeed
              }`;
              this.render();
            }
          });

          const increaseFanSpeed = document.createElement("button");
          increaseFanSpeed.className = "decrease_channel button";
          increaseFanSpeed.type = "button";
          increaseFanSpeed.innerHTML = "sp+";
          increaseFanSpeed.addEventListener("click", () => {
            if (device.isEnabledStatus === true) {
              device.currentFanSpeed = device.increaseFanSpeed();
              currentFanSpeed.innerText = `Fan Speed: ${
                device.currentFanSpeed
              }`;
              this.render();
            }
          });

          const deleteDeviceButton = document.createElement("button");
          deleteDeviceButton.className = "delete_device-btn button";
          deleteDeviceButton.innerHTML = "Delete Device";
          deleteDeviceButton.addEventListener("click", () => {
            let confirmQuestion = confirm(
              "Are you sure that you want to delete this device?"
            );
            if (confirmQuestion === true) {
              this.smartHouse.deleteDeviceByName(device._name);
              this.render();
            }
          });

          airCondContainer.appendChild(deviceType);
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

          devicesList.appendChild(airCondContainer);
        }
      });
    });
  }
}
