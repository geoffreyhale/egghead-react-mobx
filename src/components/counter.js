import React, { Component } from "react";
import { action } from "mobx";
import { observer } from "mobx-react";
import appState from "../stores/app";

@observer
export default class Counter extends Component {
  render() {
    return (
      <div>
        Counter: {appState.count} <br />
        <button onClick={this.handleInc}> + </button>
        <button onClick={this.handleDec}> - </button>
      </div>
    );
  }

  @action
  handleInc = () => {
    appState.increment();
  };

  @action
  handleDec = () => {
    appState.decrement();
  };
}
