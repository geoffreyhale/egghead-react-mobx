import React from "react";
import { action, observable } from "mobx";
import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";
import Temperature from "./temperature";

const TemperatureApp = observer(["temperatures"], ({ temperatures }) => (
  <ul>
    <TemperatureInput />
    {temperatures.map(t => (
      <TView key={t.id} temperature={t} />
    ))}
    <DevTools />
  </ul>
));

@observer
class TemperatureInput extends React.Component {
  @observable
  input = "";

  render() {
    return (
      <li>
        Destination
        <input onChange={this.onChange} value={this.input} />
        <button onClick={this.onSubmit}>Add</button>
      </li>
    );
  }

  @action
  onChange = e => {
    this.input = e.target.value;
  };

  @action
  onSubmit = () => {
    this.props.temperatures.push(new Temperature(this.input));
    this.input = "";
  };
}

@observer
class TView extends React.Component {
  render() {
    const t = this.props.temperature;
    return (
      <li onClick={this.onTemperatureClick}>
        {t.location}:{t.loading ? "loading..." : t.temperature}
      </li>
    );
  }

  @action
  onTemperatureClick = () => {
    this.props.temperature.inc();
  };
}

export default function() {
  return <TemperatureApp />;
}
