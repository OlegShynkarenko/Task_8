import { Device } from "../Device/Device";

export class Tv extends Device {
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

export class RenderTV {
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
    deleteDeviceButton.className = "delete_device";
    deleteDeviceButton.innerHTML = "Delete Device";
    deleteDeviceButton.addEventListener("click", () => {
      this.SmartHouse.deleteDeviceByName(this._tv._name);
      /*const root = document.getElementById('root');
      const targetElem = document.querySelector('.tv');
      root.removeChild(targetElem);*/
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
    /*tvContainer.appendChild(deleteDeviceButton);*/

    this._rootElement.appendChild(tvContainer);
  }
}
