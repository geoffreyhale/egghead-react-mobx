import React from "react";
import { inject, observer } from "mobx-react";
import DevTools from "mobx-react-devtools";
import temperatures from "../../../stores/temperatures";
import TemperatureInput from "./temperatureInput";
import TemperatureView from "./temperatureView";

@inject("temperatures")
@observer
export default class TemperatureApp extends React.Component {
  render() {
    return (
      <ul>
        <TemperatureInput />
        {temperatures.map(t => (
          <TemperatureView key={t.id} temperature={t} />
        ))}
        <DevTools />
      </ul>
    );
  }
}
