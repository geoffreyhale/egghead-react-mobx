import React from "react";
import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";
import TemperatureInput from "./temperatureInput";
import TemperatureView from "./temperatureView";

const TemperatureApp = observer(["temperatures"], ({ temperatures }) => (
  <ul>
    <TemperatureInput />
    {temperatures.map(t => (
      <TemperatureView key={t.id} temperature={t} />
    ))}
    <DevTools />
  </ul>
));

export default function() {
  return <TemperatureApp />;
}
