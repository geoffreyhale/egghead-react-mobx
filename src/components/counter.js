import React, { Component } from 'react';
import { observer } from 'mobx-react';
import appState from '../stores/app';

@observer
export default class Counter extends Component {
  render() {
    return (
      <div>
        Counter: {appState.count} <br/>
        <button onClick={this.handleInc.bind(this)}> + </button>
        <button onClick={this.handleDec.bind(this)}> - </button>
      </div>
    )
  }

  handleInc = () => {
    appState.increment();
  }

  handleDec = () => {
    appState.decrement();
  }
}
