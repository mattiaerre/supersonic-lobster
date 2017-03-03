import { combineReducers } from 'redux';
import initialState from './initialState';
import * as types from '../constants/actionTypes';

const falcorReducer = (state = initialState.falcor, action) => {
  switch (action.type) {
    case types.GET_FALCOR_MODEL:
      return action.payload;
    default:
      return state;
  }
};

const counterReducer = (state = initialState.counter, action) => {
  switch (action.type) {
    case types.SET_COUNTER:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  falcor: falcorReducer,
  counter: counterReducer
});

export default rootReducer;
