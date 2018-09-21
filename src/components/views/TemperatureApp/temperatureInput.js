import React from "react";
import { action, observable } from "mobx";
import { inject, observer } from "mobx-react";
import Temperature from "../../models/Temperature";

@inject("temperatures")
@observer
export default class TemperatureInput extends React.Component {
  @observable
  input = "";

  @action
  onChange = e => {
    this.input = e.target.value;
  };

  @action
  onSubmit = () => {
    this.props.temperatures.push(new Temperature(this.input));
    this.input = "";
  };

  render() {
    return (
      <li>
        Destination
        <input onChange={this.onChange} value={this.input} />
        <button onClick={this.onSubmit}>Add</button>
      </li>
    );
  }
}
