import React from 'react';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

const TemperatureApp = observer(({ temperature }) => (
  <div>
    {temperature.temperature}
    <DevTools />
  </div>
));

export default TemperatureApp;
