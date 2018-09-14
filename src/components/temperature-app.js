import React from "react";
import { action, observable } from "mobx";
import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";

import Temperature from "./temperature";

window.Temperature = Temperature;
// window.temps = observable.map({
//   "Amsterdam": new Temperature(),
//   "Rome": new Temperature()
// });
//console: temps.set("Tel Aviv", new Temperature());
window.temps = [];
temps.push(new Temperature(20, "K"));
temps.push(new Temperature(25, "F"));
temps.push(new Temperature(20, "C"));

const TemperatureApp = observer(({ temperatures }) => (
  <ul>
    {temperatures.map(t => (
      <TView key={t.id} temperature={t} />
    ))}
    <DevTools />
  </ul>
));

@observer
class TView extends React.Component {
  render() {
    const t = this.props.temperature;
    return <li onClick={this.onTemperatureClick}>{t.temperature}</li>;
  }

  @action
  onTemperatureClick = () => {
    this.props.temperature.inc();
  };
}

export default function() {
  return <TemperatureApp temperatures={window.temps} />;
}
