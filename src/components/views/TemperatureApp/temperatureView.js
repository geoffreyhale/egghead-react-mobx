import React from "react";
import { action } from "mobx";
import { observer } from "mobx-react";

@observer
export default class TemperatureView extends React.Component {
  @action
  onTemperatureClick = () => {
    this.props.temperature.inc();
  };

  render() {
    const { temperature } = this.props;

    return (
      <li onClick={this.onTemperatureClick}>
        {temperature.location}
        {": "}
        {temperature.loading ? "loading..." : temperature.temperature}
      </li>
    );
  }
}
