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
  @observable
  unit = "C";
  @observable
  temperatureCelsius = 25;
  @observable
  location = "Amsterdam, NL";
  @observable
  loading = true;

  constructor(location, temperatureCelsius = 25, unit = "C") {
    this.location = location;
    this.fetch();
  }

  @action
  fetch() {
    const APPID = "@todo";
    window
      .fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${
          this.location
        }&APPID=${APPID}`
      )
      .then(res => {
        console.log(res);
        res.json();
      })
      .then(
        action(json => {
          console.log(json.main);
          this.temperatureCelsius = json.main.temp - 273.15;
          this.loading = false;
        })
      );
  }

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
