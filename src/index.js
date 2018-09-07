import React from "react";
import ReactDOM from "react-dom";

import Counter from './components/counter';
import Temperature from './components/temperature';
import TemperatureApp from './components/temperature-app';

window.temperature = new Temperature();

const Index = () => {
  return (
    <div>
      <Counter />
      <TemperatureApp temperature={window.temperature} />
    </div>
  )
};

ReactDOM.render(<Index />, document.getElementById("index"));
