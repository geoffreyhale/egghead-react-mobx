import React, { Component } from "react";
import { action } from "mobx";
import { observer } from "mobx-react";
import counterState from "./stores";

@observer
export default class Counter extends Component {
  render() {
    return (
      <div>
        Counter: {counterState.count} <br />
        <button onClick={this.handleInc}> + </button>
        <button onClick={this.handleDec}> - </button>
      </div>
    );
  }

  @action
  handleInc = () => {
    counterState.increment();
  };

  @action
  handleDec = () => {
    counterState.decrement();
  };
}
