import { Device } from "../Device/Device";

export class Tv extends Device {
  constructor(name) {
    super(name);
    this._name = name;
    this._sources = ["TV antenna", "HDMI", "USB", "PC"];
    this._type = "Tv";
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
