!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
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
        for (var i in e)
          n.d(
            r,
            i,
            function(t) {
              return e[t];
            }.bind(null, i)
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
    class s {
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
        const i = document.createElement("div");
        i.className = "tv__controls-channel";
        let s = document.createElement("div");
        s.innerText = `Device name: ${
          this._tv._name
        } - ${this._tv.getHumanizedName()}`;
        let a = document.createElement("div");
        a.className = "stateField";
        let c = () => {
          a.innerText = `Device status: ${
            this._tv.isEnabledStatus ? "On" : "Off"
          }`;
        };
        const o = document.createElement("button");
        (o.className = "tv__controls-power-on-btn button"),
          (o.type = "button"),
          (o.innerHTML = "ON"),
          o.addEventListener("click", () => {
            this._tv.setDeviceOn(), c();
          });
        const u = document.createElement("button");
        (u.className = "tv__controls-power-off-btn button"),
          (u.type = "button"),
          (u.innerHTML = "OFF"),
          u.addEventListener("click", () => {
            this._tv.setDeviceOff(), c();
          });
        let d = document.createElement("div");
        const l = document.createElement("button");
        (l.className = "decrease_volume button"),
          (l.type = "button"),
          (l.innerHTML = " vol-"),
          l.addEventListener("click", () => {
            !0 === this._tv.isEnabledStatus &&
              ((this._tv.currentVolume = this._tv.decreaseVolume()),
              (d.innerText = `Volume: ${this._tv.currentVolume}`));
          });
        const m = document.createElement("button");
        (m.className = "decrease_volume button"),
          (m.type = "button"),
          (m.innerHTML = "vol+"),
          m.addEventListener("click", () => {
            !0 === this._tv.isEnabledStatus &&
              ((this._tv.currentVolume = this._tv.increaseVolume()),
              (d.innerText = `Volume: ${this._tv.currentVolume}`));
          });
        let h = document.createElement("div");
        const _ = document.createElement("button");
        (_.className = "decrease_channel button"),
          (_.type = "button"),
          (_.innerHTML = "ch-"),
          _.addEventListener("click", () => {
            !0 === this._tv.isEnabledStatus &&
              ((this._tv.currentChannel = this._tv.decreaseChannel()),
              (h.innerText = `Channel: ${this._tv.currentChannel}`));
          });
        const p = document.createElement("button");
        (p.className = "decrease_channel button"),
          (p.type = "button"),
          (p.innerHTML = "ch+"),
          p.addEventListener("click", () => {
            !0 === this._tv.isEnabledStatus &&
              ((this._tv.currentChannel = this._tv.increaseChannel()),
              (h.innerText = `Channel: ${this._tv.currentChannel}`));
          });
        const v = document.createElement("button");
        (v.className = "delete_device-btn button"),
          (v.innerHTML = "Delete Device"),
          v.addEventListener("click", () => {
            this.SmartHouse.deleteDeviceByName(this._tv._name), e.remove();
          }),
          c(),
          (() => {
            d.innerText = `Volume: ${this._tv.currentVolume}`;
          })(),
          (() => {
            h.innerText = `Channel: ${this._tv.currentChannel}`;
          })(),
          e.appendChild(s),
          n.appendChild(a),
          n.appendChild(o),
          n.appendChild(u),
          r.appendChild(d),
          r.appendChild(l),
          r.appendChild(m),
          i.appendChild(h),
          i.appendChild(_),
          i.appendChild(p),
          t.appendChild(n),
          t.appendChild(r),
          t.appendChild(i),
          e.appendChild(t),
          e.appendChild(v),
          this._rootElement.appendChild(e);
      }
    }
    class a extends r {
      constructor(e) {
        super(e),
          (this._currentColorTemperature = 3e3),
          (this._minColorTemperature = 2e3),
          (this._maxColorTemperature = 6500),
          (this._currentBrightness = 5),
          (this._minBrightness = 1),
          (this._maxBrightness = 10);
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
    class c extends r {
      constructor(e) {
        super(e),
          (this._name = e),
          (this._mode = ["COOL", "HEAT", "DRY", "FAN"]),
          (this._currentTemperature = 20),
          (this._minTemperature = 15),
          (this._maxTemperature = 30),
          (this._currentFanSpeed = 3),
          (this._minFanSpeed = 1),
          (this._maxFanSpeed = 5);
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
      setSource(e) {
        -1 !== this._mode.indexOf(e) && (this._currentMode = e);
      }
      get currentTemperature() {
        return this._currentTemperature;
      }
      set currentTemperature(e) {
        e > this._minTemperature &&
          e < this._maxTemperature &&
          (this._currentTemperature = e);
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
      set currentFanSpeed(e) {
        e > this._minFanSpeed &&
          e < this._maxFanSpeed &&
          (this._currentFanSpeed = e);
      }
      increaseFanSpeed() {
        this._currentFanSpeed < this._maxFanSpeed && this._currentFanSpeed++;
      }
      decreaseFanSpeed() {
        this._currentFanSpeed > this._minFanSpeed && this._currentFanSpeed--;
      }
    }
    class o {
      constructor(e, t, n) {
        (this._airConditioning = e),
          (this._rootElement = t),
          (this.smartHouse = n);
      }
      render() {
        const e = document.createElement("div");
        e.className = "ac";
        const t = document.createElement("div");
        t.className = "ac__controls";
        const n = document.createElement("div");
        n.className = "ac__controls-power";
        const r = document.createElement("div");
        r.className = "ac__controls-volume";
        const i = document.createElement("div");
        i.className = "ac__controls-channel";
        let s = document.createElement("div");
        s.innerText = `Device name: ${
          this._airConditioning._name
        } - ${this._airConditioning.getHumanizedName()}`;
        let a = document.createElement("div");
        a.className = "stateField";
        let c = () => {
          a.innerText = `Device status: ${
            this._airConditioning.isEnabledStatus ? "On" : "Off"
          }`;
        };
        const o = document.createElement("button");
        (o.className = "ac__controls-power-on-btn button"),
          (o.type = "button"),
          (o.innerHTML = "ON"),
          o.addEventListener("click", () => {
            this._airConditioning.setDeviceOn(), c();
          });
        const u = document.createElement("button");
        (u.className = "ac__controls-power-off-btn button"),
          (u.type = "button"),
          (u.innerHTML = "OFF"),
          u.addEventListener("click", () => {
            this._airConditioning.setDeviceOff(), c();
          });
        let d = document.createElement("div");
        const l = document.createElement("button");
        (l.className = "decrease_temp-btn button"),
          (l.type = "button"),
          (l.innerHTML = "temp-"),
          l.addEventListener("click", () => {
            !0 === this._airConditioning.isEnabledStatus &&
              ((this._airConditioning.currentTemperature = this._airConditioning.decreaseTemperature()),
              (d.innerText = `Temperature: ${
                this._airConditioning.currentTemperature
              }`));
          });
        const m = document.createElement("button");
        (m.className = "decrease_volume button"),
          (m.type = "button"),
          (m.innerHTML = "temp+"),
          m.addEventListener("click", () => {
            !0 === this._airConditioning.isEnabledStatus &&
              ((this._airConditioning.currentTemperature = this._airConditioning.increaseTemperature()),
              (d.innerText = `Temperature: ${
                this._airConditioning.currentTemperature
              }`));
          });
        let h = document.createElement("div");
        const _ = document.createElement("button");
        (_.className = "decrease_channel button"),
          (_.type = "button"),
          (_.innerHTML = "sp-"),
          _.addEventListener("click", () => {
            !0 === this._airConditioning.isEnabledStatus &&
              ((this._airConditioning.currentFanSpeed = this._airConditioning.decreaseFanSpeed()),
              (h.innerText = `Fan Speed: ${
                this._airConditioning.currentFanSpeed
              }`));
          });
        const p = document.createElement("button");
        (p.className = "decrease_channel button"),
          (p.type = "button"),
          (p.innerHTML = "sp+"),
          p.addEventListener("click", () => {
            !0 === this._airConditioning.isEnabledStatus &&
              ((this._airConditioning.currentFanSpeed = this._airConditioning.increaseFanSpeed()),
              (h.innerText = `Fan Speed: ${
                this._airConditioning.currentFanSpeed
              }`));
          });
        const v = document.createElement("button");
        (v.className = "delete_device-btn button"),
          (v.innerHTML = "Delete Device"),
          v.addEventListener("click", () => {
            this.smartHouse.deleteDeviceByName(this._airConditioning._name),
              e.remove();
          }),
          c(),
          (() => {
            d.innerText = `Temperature: ${
              this._airConditioning.currentTemperature
            }`;
          })(),
          (() => {
            h.innerText = `Fan Speed: ${this._airConditioning.currentFanSpeed}`;
          })(),
          e.appendChild(s),
          n.appendChild(a),
          n.appendChild(o),
          n.appendChild(u),
          r.appendChild(d),
          r.appendChild(l),
          r.appendChild(m),
          i.appendChild(h),
          i.appendChild(_),
          i.appendChild(p),
          t.appendChild(n),
          t.appendChild(r),
          t.appendChild(i),
          e.appendChild(t),
          e.appendChild(v),
          this._rootElement.appendChild(e);
      }
    }
    n(1);
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
            alert(
              "This device has been already added or you didn't enter device name"
            )
          );
        this._devices.set(e._name, e);
      }
      deleteDeviceByName(e) {
        let t = confirm("Are you sure that you want to delete this device?");
        if (!this._devices.has(e) || !0 !== t)
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
    }("My Smart House", "NY, 5th AV", "Oleg Shynkarenko");
    u.registerDevice(i),
      u.registerDevice(a),
      u.registerDevice(c),
      new class {
        constructor(e) {
          (this.smartHouse = e), (this.root = document.getElementById("root"));
        }
        render() {
          const e = document.createElement("div"),
            t = document.createElement("select");
          t.setAttribute("id", "select"), (t.className = "select");
          const n = this.smartHouse._register,
            r = document.createElement("option");
          (r.text = "Choose your device"), t.add(r, null);
          for (const e of n) {
            const [n, r] = e,
              i = document.createElement("option");
            (i.value = r.getDeviceName()),
              (i.text = r.getHumanizedName()),
              t.add(i, null);
          }
          const u = document.createElement("input");
          (u.type = "text"),
            (u.placeholder = "Enter device name"),
            (u.className = "deviceNameInput");
          const d = document.createElement("button");
          (d.innerHTML = "Add Device"),
            (d.className = "addDeviceBtn"),
            t.addEventListener("change", () => {
              const t = document.getElementById("select").options.selectedIndex;
              (u.value = ""),
                e.appendChild(u),
                e.appendChild(d),
                0 === t && (u.remove(), d.remove());
            }),
            d.addEventListener("click", () => {
              const e = document.getElementById("select").options.selectedIndex,
                t = document.getElementById("select").options[e].value,
                n = u.value;
              switch (((u.value = ""), t)) {
                case "tv-set":
                  const e = new i(n);
                  this.smartHouse.addNewDevice(e),
                    new s(
                      e,
                      document.getElementById("root"),
                      this.smartHouse
                    ).render();
                  break;
                case "light":
                  const r = new a(n);
                  this.smartHouse.addNewDevice(r);
                  break;
                case "air_conditioning":
                  const d = new c(n);
                  this.smartHouse.addNewDevice(d),
                    new o(
                      d,
                      document.getElementById("root"),
                      this.smartHouse
                    ).render();
              }
            }),
            e.appendChild(t),
            this.root.appendChild(e);
        }
      }(u).render();
  },
  function(e, t) {}
]);
//# sourceMappingURL=main.js.map
