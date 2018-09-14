import React from "react";
import ReactDOM from "react-dom";

import { observable } from "mobx";
import { Provider } from "mobx-react";

import Counter from "./components/counter";
import Temperature from "./components/temperature";
import TemperatureApp from "./components/temperature-app";

const temps = observable([]);
temps.push(new Temperature());

const Index = () => {
  return (
    <div>
      <Counter />
      <Provider temperatures={temps}>
        <TemperatureApp />
      </Provider>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
