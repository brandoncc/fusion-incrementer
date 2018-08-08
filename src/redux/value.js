import {createRPCReducer} from 'fusion-plugin-rpc-redux-react';
import reduceReducers from 'reduce-reducers';

const increment = (state = 0, action) => {
  if (action.type === 'INCREMENT_START') {
    return state;
  } else if (action.type === 'INCREMENT_SUCCESS') {
    return action.payload.value;
  } else if (action.type === 'INCREMENT_FAILURE') {
    return state;
  } else {
    return state;
  }
}

const decrement = createRPCReducer('decrement', {
  start: state => state,
  success: (_state, action) => action.payload.value,
  failure: state => state
}, 0)

export default reduceReducers(increment, decrement);
