import React from "react";
import ReactDOM from "react-dom";
import {observable} from 'mobx';

import Counter from './components/counter';
import Temperature from './components/temperature';
import TemperatureApp from './components/temperature-app';

window.temps = observable([]);
temps.push(new Temperature());
temps.push(new Temperature());

const Index = () => {
  return (
    <div>
      <Counter />
      <TemperatureApp temperatures={window.temps} />
    </div>
  )
};

ReactDOM.render(<Index />, document.getElementById("index"));
