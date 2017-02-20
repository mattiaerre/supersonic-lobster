import { combineReducers } from 'redux';
import { reducer as falcorReducer } from 'redux-falcor';
import initialState from './initialState';
import * as types from '../constants/actionTypes';

const ocRegistryBaseUrlReducer = (state = initialState.ocRegistryBaseUrl, action) => {
  switch (action.type) {
    case types.GET_OC_REGISTRY_BASE_URL:
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

const falcorReducerWrapper = (state = initialState.falcor, action) => (falcorReducer(state, action)); // eslint-disable-line max-len

const rootReducer = combineReducers({
  falcor: falcorReducerWrapper,
  ocRegistryBaseUrl: ocRegistryBaseUrlReducer,
  counter: counterReducer
});

export default rootReducer;
