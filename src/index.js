import React from "react";
import ReactDOM from "react-dom";

import Counter from './components/counter';
import TemperatureApp from './components/temperature-app';

const Index = () => {
  return (
    <div>
      <Counter />
      <TemperatureApp />
    </div>
  )
};

ReactDOM.render(<Index />, document.getElementById("index"));
