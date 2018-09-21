import React from "react";
import ReactDOM from "react-dom";

import { observable } from "mobx";
import { Provider } from "mobx-react";

import Counter from "./components/counter";
import Temperature from "./components/models/Temperature";
import TemperatureApp from "./components/views/TemperatureApp";

const temps = observable([]);
temps.push(new Temperature("Santa Barbara, CA", 72, "F"));

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
