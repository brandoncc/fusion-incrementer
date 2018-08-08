import valueReducer from './value';

export default (state = {}, action) => ({
  value: valueReducer(state.value, action)
});
