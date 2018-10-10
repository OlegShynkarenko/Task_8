import { Device } from "./Device";

export class Tv extends Device {
  constructor(
    type,
    name,
    sources = ["TV antenna", "HDMI", "USB", "PC"],
    currentSource = sources[0],
    currentChannel = 1,
    minChannelValue = 1,
    maxChannelValue = 100,
    currentVolume = 10,
    minVolume = 0,
    maxVolume = 50
  ) {
    super(name);
    this._type = type;
    this._name = name;
    this._sources = sources;
    this._currentSource = currentSource;
    this._currentChannel = currentChannel;
    this._minChannelValue = minChannelValue;
    this._maxChannelValue = maxChannelValue;
    this._currentVolume = currentVolume;
    this._minVolume = minVolume;
    this._maxVolume = maxVolume;
  }
  get type() {
    return this._type;
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
  get currentChanell() {
    return this._currentChannel;
  }
  setChannel(channel) {
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
