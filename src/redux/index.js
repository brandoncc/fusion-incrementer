import valueReducer from './value';
import logReducer from './log';

export default (state = {}, action) => ({
  value: valueReducer(state.value, action),
  log: logReducer(state.log, action)
});
