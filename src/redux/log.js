import {createRPCReducer} from 'fusion-plugin-rpc-redux-react';
import reduceReducers from 'reduce-reducers';

const increment = createRPCReducer('increment', {
  success: (state, action) => {
    return [
      ...state,
      {
        type: 'incremented',
        timestamp: new Date().toString(),
        newValue: action.payload.value
      }
    ]
  }
}, []);

const decrement = createRPCReducer('decrement', {
  success: (state, action) => {
    return [
      ...state,
      {
        type: 'decremented',
        timestamp: new Date().toString(),
        newValue: action.payload.value
      }
    ]
  }
}, []);

export default reduceReducers(increment, decrement);
