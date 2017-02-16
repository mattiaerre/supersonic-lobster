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

const apodReducer = (state = initialState.apod, action) => {
  switch (action.type) {
    case types.GET_APOD_COMPLETED:
      return action.payload;
    default:
      return state;
  }
};

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

const rootReducer = combineReducers({
  greeting: greetingReducer,
  apod: apodReducer,
  ocRegistryBaseUrl: ocRegistryBaseUrlReducer,
  counter: counterReducer
});

export default rootReducer;
