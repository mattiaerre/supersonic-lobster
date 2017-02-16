import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import * as types from './constants/actionTypes';
import App from './containers/App/App';

const store = configureStore();

// OC init todo: move into a separate file
const app = document.getElementById('app');
if (app.dataset && app.dataset.ocRegistryBaseUrl) {
  store.dispatch({
    type: types.GET_OC_REGISTRY_BASE_URL,
    payload: app.dataset.ocRegistryBaseUrl
  });
}

const events = window.oc.events;

events.on('oc-date-time-now:ready', () => {
  events.fire('supersonic-lobster:counter', store.getState().counter);
});

events.on('oc-date-time-now:increase', (e, data) => {
  store.dispatch({
    type: types.SET_COUNTER,
    payload: data
  });
});

events.on('oc-date-time-now:decrease', (e, data) => {
  store.dispatch({
    type: types.SET_COUNTER,
    payload: data
  });
});
// /OC init

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
