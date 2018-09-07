import React from 'react';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

const TemperatureApp = observer(({ temperatures }) => (
  <div>
    {temperatures.map(t =>
      <div key={t.id}>{t.temperature}</div>
    )}
    <DevTools />
  </div>
));

export default TemperatureApp;
