import React from "react";
import ReactDOM from "react-dom";

import Counter from './components/counter';

const Index = () => {
  return <Counter />;
};

ReactDOM.render(<Index />, document.getElementById("index"));
