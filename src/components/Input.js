// @flow
import React from 'react';

import {styled} from 'fusion-plugin-styletron-react';

const CurrentValue = styled('span', {
  marginRight: '20px'
});

export default () => (
  <div>
    <CurrentValue>Current value: 0</CurrentValue>
    <button>+</button>
    <button>-</button>
  </div>
);
