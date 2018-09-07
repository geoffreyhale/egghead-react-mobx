import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import Temperature from './temperature';

window.Temperature = Temperature;
window.temps = observable.map({
  "Amsterdam": new Temperature(),
  "Rome": new Temperature()
});
//console: temps.set("Tel Aviv", new Temperature());

const TemperatureApp = observer(({ temperatures }) => (
  <div>
    {Array.from(temperatures).map(([k,t]) =>
      <div key={k}>{t.temperature}</div>
    )}
    <DevTools />
  </div>
));

export default function() {
  return <TemperatureApp temperatures={window.temps} />
};
