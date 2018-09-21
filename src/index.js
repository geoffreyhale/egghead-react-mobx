import React from "react";
import ReactDOM from "react-dom";

import { observable } from "mobx";
import { Provider } from "mobx-react";

import temperatures from "./stores/temperatures";
import Counter from "./components/views/CounterApp";
import Temperature from "./components/models/Temperature";
import TemperatureApp from "./components/views/TemperatureApp";

const Index = () => {
  return (
    <div>
      <Counter />
      <Provider temperatures={temperatures}>
        <TemperatureApp />
      </Provider>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
