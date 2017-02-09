import { combineReducers } from 'redux';
import initialState from './initialState';
import * as types from '../constants/actionTypes';

const greetingReducer = (state = initialState.greeting, action) => {
  switch (action.type) {
    case types.GET_GREETING_COMPLETED:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  greeting: greetingReducer
});

export default rootReducer;
