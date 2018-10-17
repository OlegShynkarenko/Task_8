!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var s = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(s.exports, s, s.exports, n), (s.l = !0), s.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var s in e)
          n.d(
            r,
            s,
            function(t) {
              return e[t];
            }.bind(null, s)
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "dist/"),
    n((n.s = 0));
})([
  function(e, t, n) {
    "use strict";
    n.r(t);
    class r {
      constructor(e) {
        (this._name = e), (this._isEnabled = !1);
      }
      get name() {
        return (this._name = name);
      }
      get isEnabledStatus() {
        return this._isEnabled;
      }
      setDeviceOn() {
        this._isEnabled || (this._isEnabled = !0);
      }
      setDeviceOff() {
        this._isEnabled && (this._isEnabled = !1);
      }
    }
    class s extends r {
      constructor(e, t) {
        super(e),
          (this._name = e),
          (this._mode = ["COOL", "HEAT", "DRY", "FAN"]);
        this.config = Object.assign(
          {},
          {
            currentTemperature: 20,
            minTemperature: 15,
            maxTemperature: 30,
            currentFanSpeed: 3,
            minFanSpeed: 1,
            maxFanSpeed: 5
          },
          t
        );
      }
      static getDeviceName() {
        return "air_conditioning";
      }
      static getHumanizedName() {
        return "Air Conditioning Device";
      }
      getConfig() {
        return this.config;
      }
      set currentTemperature(e) {
        this._currentTemperature = e < 10 ? 10 : e;
      }
      get fanSpeed() {
        return this._currentFanSpeed;
      }
      get currentMode() {
        return this._currentMode;
      }
      setSource(e) {
        -1 !== this._mode.indexOf(e) && (this._currentMode = e);
      }
      get currentTemperature() {
        return this._currentTemperature;
      }
      increaseTemperature() {
        this._currentTemperature < this._maxTemperature &&
          this._currentTemperature++;
      }
      decreaseTemperature() {
        this._currentTemperature > this._minTemperature &&
          this._currentTemperature--;
      }
      get currentFanSpeed() {
        return this._currentFanSpeed;
      }
      increaseFanSpeed() {
        this._currentFanSpeed < this._maxFanSpeed && this._currentFanSpeed++;
      }
      decreaseTemperature() {
        this._currentFanSpeed > this._minFanSpeed && this._currentFanSpeed--;
      }
    }
    class i extends r {
      constructor(e) {
        super(e),
          (this._name = e),
          (this._sources = ["TV antenna", "HDMI", "USB", "PC"]),
          (this._currentChannel = 1),
          (this._minChannelValue = 1),
          (this._maxChannelValue = 100),
          (this._currentVolume = 10),
          (this._minVolume = 0),
          (this._maxVolume = 50);
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
      setSource(e) {
        -1 !== this._sources.indexOf(e) && (this._currentSource = e);
      }
      get currentChannel() {
        return this._currentChannel;
      }
      set currentChannel(e) {
        e >= this._minChannelValue &&
          e <= this._maxChannelValue &&
          (this._currentChannel = e);
      }
      increaseChannel() {
        this._currentChannel++,
          this._currentChannel > this._maxChannelValue &&
            (this._currentChannel = 1);
      }
      decreaseChannel() {
        this._currentChannel--,
          this._currentChannel < this._minChannelValue &&
            (this._currentChannel = 100);
      }
      get currentVolume() {
        return this._currentVolume;
      }
      set currentVolume(e) {
        e > this._minVolume && e < this._maxVolume && (this._currentVolume = e);
      }
      increaseVolume() {
        this._currentVolume < this._maxVolume && this._currentVolume++;
      }
      decreaseVolume() {
        this._currentVolume > this._minVolume && this._currentVolume--;
      }
    }
    class a extends r {
      constructor(e, t) {
        super(e);
        this.config = Object.assign(
          {},
          {
            currentColorTemperature: 3e3,
            minColorTemperature: 2e3,
            maxColorTemperature: 6500,
            currentBrightness: 5,
            minBrightness: 1,
            maxBrightness: 10
          },
          t
        );
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
        this._currentColorTemperature < this._maxColorTemperature &&
          this._currentColorTemperature++;
      }
      decreaseColorTemperature() {
        this._currentColorTemperature > this._minColorTemperature &&
          this._currentColorTemperature--;
      }
      get currentBrightness() {
        return this._currentBrightness;
      }
      increaseBrightness() {
        this._currentBrightness < this._maxBrightness &&
          this._currentBrightness++;
      }
      decreaseBrightness() {
        this._currentBrightness > this._minBrightness &&
          this._currentBrightness--;
      }
      setNightMode() {
        (this._currentColorTemperature = 6500), (this._currentBrightness = 1);
      }
    }
    n(1);
    class c {
      constructor(e, t, n) {
        (this._tv = e), (this._rootElement = t), (this.SmartHouse = n);
      }
      render() {
        const e = document.createElement("div");
        e.className = "tv";
        const t = document.createElement("div");
        t.className = "tv__controls";
        const n = document.createElement("div");
        n.className = "tv__controls-power";
        const r = document.createElement("div");
        r.className = "tv__controls-volume";
        const s = document.createElement("div");
        s.className = "tv__controls-channel";
        let i = document.createElement("div");
        i.innerText = `Device name: ${
          this._tv._name
        } - ${this._tv.getHumanizedName()}`;
        let a = document.createElement("div");
        a.className = "stateField";
        let c = () => {
          a.innerText = `Device status: ${
            this._tv.isEnabledStatus ? "On" : "Off"
          }`;
        };
        const u = document.createElement("button");
        (u.className = "tv__controls-power-on-btn button"),
          (u.type = "button"),
          (u.innerHTML = "ON"),
          u.addEventListener("click", () => {
            this._tv.setDeviceOn(), c();
          });
        const o = document.createElement("button");
        (o.className = "tv__controls-power-off-btn button"),
          (o.type = "button"),
          (o.innerHTML = "OFF"),
          o.addEventListener("click", () => {
            this._tv.setDeviceOff(), c();
          });
        let l = document.createElement("div");
        const d = document.createElement("button");
        (d.className = "decrease_volume button"),
          (d.type = "button"),
          (d.innerHTML = " vol-"),
          d.addEventListener("click", () => {
            !0 === this._tv.isEnabledStatus &&
              ((this._tv.currentVolume = this._tv.decreaseVolume()),
              (l.innerText = `Volume: ${this._tv.currentVolume}`));
          });
        const h = document.createElement("button");
        (h.className = "decrease_volume button"),
          (h.type = "button"),
          (h.innerHTML = "vol+"),
          h.addEventListener("click", () => {
            !0 === this._tv.isEnabledStatus &&
              ((this._tv.currentVolume = this._tv.increaseVolume()),
              (l.innerText = `Volume: ${this._tv.currentVolume}`));
          });
        let m = document.createElement("div");
        const _ = document.createElement("button");
        (_.className = "decrease_channel button"),
          (_.type = "button"),
          (_.innerHTML = "ch-"),
          _.addEventListener("click", () => {
            !0 === this._tv.isEnabledStatus &&
              ((this._tv.currentChannel = this._tv.decreaseChannel()),
              (m.innerText = `Channel: ${this._tv.currentChannel}`));
          });
        const p = document.createElement("button");
        (p.className = "decrease_channel button"),
          (p.type = "button"),
          (p.innerHTML = "ch+"),
          p.addEventListener("click", () => {
            !0 === this._tv.isEnabledStatus &&
              ((this._tv.currentChannel = this._tv.increaseChannel()),
              (m.innerText = `Channel: ${this._tv.currentChannel}`));
          });
        const v = document.createElement("button");
        (v.className = "delete_device"),
          (v.innerHTML = "Delete Device"),
          v.addEventListener("click", () => {
            this.SmartHouse.deleteDeviceByName(this._tv._name);
          }),
          c(),
          (() => {
            l.innerText = `Volume: ${this._tv.currentVolume}`;
          })(),
          (() => {
            m.innerText = `Channel: ${this._tv.currentChannel}`;
          })(),
          e.appendChild(i),
          n.appendChild(a),
          n.appendChild(u),
          n.appendChild(o),
          r.appendChild(l),
          r.appendChild(d),
          r.appendChild(h),
          s.appendChild(m),
          s.appendChild(_),
          s.appendChild(p),
          t.appendChild(n),
          t.appendChild(r),
          t.appendChild(s),
          e.appendChild(t),
          e.appendChild(v),
          this._rootElement.appendChild(e);
      }
    }
    const u = new class {
      constructor(e, t, n) {
        (this._name = e),
          (this._address = t),
          (this._owner = n),
          (this._devices = new Map()),
          (this._register = new Map());
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
      registerDevice(e) {
        const t = e.getDeviceName();
        this._register.set(t, e);
      }
      addNewDevice(e) {
        if (!1 !== this._devices.has(e._name) || !e._name)
          throw new Error(
            "This device has been already added or you didn't enter device name."
          );
        this._devices.set(e._name, e);
      }
      deleteDeviceByName(e) {
        if (!this._devices.has(e))
          throw new Error("There is no such device in the list");
        this._devices.delete(e);
      }
      deleteAllDevices() {
        this._devices.clear();
      }
      showAllDevices() {
        return this._devices;
      }
      showDeviceByName(e) {
        return this._devices.get(e);
      }
    }("my house", "NY, 5th AV", "Oleg Shynkarenko");
    u.registerDevice(i), u.registerDevice(a), u.registerDevice(s);
    const o = new class {
      constructor(e) {
        (this.SmartHouse = e), (this.root = document.getElementById("root"));
      }
      renderAvailableDevicesSelect() {
        const e = document.createElement("select");
        e.setAttribute("id", "select"), (e.className = "select");
        const t = this.SmartHouse._register,
          n = document.createElement("option");
        (n.text = "Choose your device"), e.add(n, null);
        for (const n of t) {
          const [t, r] = n,
            s = document.createElement("option");
          (s.value = r.getDeviceName()),
            (s.text = r.getHumanizedName()),
            e.add(s, null);
        }
        this.root.appendChild(e);
      }
      deviceSelectionHandler() {
        const e = document.createElement("input");
        (e.type = "text"), (e.className = "deviceNameInput");
        const t = document.createElement("button");
        (t.innerHTML = "Add Device"),
          (t.className = "addDeviceBtn"),
          select.addEventListener("change", () => {
            const n = document.getElementById("select").options.selectedIndex;
            (e.value = ""),
              this.root.appendChild(e),
              this.root.appendChild(t),
              0 === n && (e.remove(), t.remove());
          }),
          t.addEventListener("click", () => {
            const t = document.getElementById("select").options.selectedIndex,
              n = document.getElementById("select").options[t].value,
              r = e.value;
            switch (n) {
              case "tv-set":
                const e = new i(r);
                this.SmartHouse.addNewDevice(e),
                  new c(e, document.getElementById("root")).render();
                break;
              case "light":
                const t = new a(r);
                this.SmartHouse.addNewDevice(t);
                break;
              case "air_conditioning":
                const u = new s(r);
                this.SmartHouse.addNewDevice(u);
            }
          });
      }
    }(u);
    o.renderAvailableDevicesSelect(),
      o.deviceSelectionHandler(),
      (window.house = u);
  },
  function(e, t) {}
]);
//# sourceMappingURL=main.js.map
