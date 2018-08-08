// @flow
import React from 'react';

import {styled} from 'fusion-plugin-styletron-react';
import {compose} from 'redux';
import {connect} from 'react-redux';

import {increment, decrement} from '../redux/reactors';

const CurrentValue = styled('span', {
  marginRight: '20px'
});

const Input = ({value, increment, decrement}) => (
  <div>
    <CurrentValue>Current value: {value}</CurrentValue>
    <button onClick={() => increment({value})}>+</button>
    <button onClick={() => decrement({value})}>-</button>
  </div>
);

const hoc = compose(
  increment,
  decrement,
  connect(({value}) => ({value}))
)

export default hoc(Input);
