import React from "react";
import { action, computed, configure, extendObservable } from "mobx";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { Component } from "react";
import { IncomingMessage } from "http";

configure({
  enforceActions: "observed"
});

export default class Temperature {
  constructor(temperatureCelsius, unit) {
    extendObservable;
  }
  @observable
  unit = "C";
  @observable
  temperatureCelsius = 25;

  @computed
  get temperatureFahrenheit() {
    return this.temperatureCelsius * (9 / 5) + 32;
  }

  @computed
  get temperatureKelvin() {
    return this.temperatureCelsius + 273.15;
  }

  @computed
  get temperature() {
    switch (this.unit) {
      case "K":
        return this.temperatureKelvin + "*K";
      case "F":
        return this.temperatureFahrenheit + "*F";
      case "C":
        return this.temperatureCelsius + "*C";
    }
  }

  @action
  setUnit(newUnit) {
    this.unit = newUnit;
  }

  @action
  setCelsius(degrees) {
    this.temperatureCelsius = degrees;
  }

  @action
  setTemperatureAndUnit(degrees, unit) {
    this.setCelsius(degrees);
    this.setUnit(unit);
  }

  @action
  inc() {
    this.setCelsius(this.temperatureCelsius + 1);
  }
}
