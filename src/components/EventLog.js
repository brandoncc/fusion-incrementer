// @flow
import React from 'react';

import {styled} from 'fusion-plugin-styletron-react';

const LogLine = styled('span', {
  display: 'block'
});

const EventLog = styled('div', {
  marginTop: '30px',
  padding: '5px',
  border: '1px solid black',
  overflowY: 'scroll',
  height: '300px',
  width: '600px',
  maxWidth: '100%'
});

export default () => (
  <EventLog>
    <LogLine>Value incremented at {new Date().toString()}. New value: 1</LogLine>
    <LogLine>Value incremented at {new Date().toString()}. New value: 2</LogLine>
    <LogLine>Value decremented at {new Date().toString()}. New value: 1</LogLine>
  </EventLog>
);
