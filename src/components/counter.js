import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
export default class Counter extends Component {
  @observable count = 0;

  render() {
    return (
      <div>
        Counter: {this.count} <br/>
        <button onClick={this.handleInc.bind(this)}> + </button>
        <button onClick={this.handleDec.bind(this)}> - </button>
      </div>
    )
  }

  handleInc() {
    this.count++;
  };

  handleDec() {
    this.count--;
  }
}
