import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        Counter: {this.state.count} <br/>
        <button onClick={this.handleInc.bind(this)}> + </button>
        <button onClick={this.handleDec.bind(this)}> - </button>
      </div>
    )
  }

  handleInc() {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleDec() {
    this.setState({
      count: this.state.count - 1
    });
  }
}
