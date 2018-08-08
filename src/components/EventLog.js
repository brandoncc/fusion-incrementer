// @flow
import React from 'react';
import {connect} from 'react-redux';

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

const StyledEventLog = ({log}) => (
  <EventLog>
    {log.map((entry, index) => {
      return (
        <LogLine key={`${entry.timestamp}/${index}`}>
          Value {entry.type} at {entry.timestamp}. New value: {entry.newValue}
        </LogLine>
      );
    })}
  </EventLog>
);

export default connect(({log}) => ({log}))(StyledEventLog);
