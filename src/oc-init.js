import * as types from './constants/actionTypes';

const ocInit = (store) => {
  const app = document.getElementById('app');
  if (app.dataset && app.dataset.ocRegistryBaseUrl) {
    store.dispatch({
      type: types.GET_OC_REGISTRY_BASE_URL,
      payload: app.dataset.ocRegistryBaseUrl
    });
  }

  window.oc = window.oc || {};
  window.oc.cmd = window.oc.cmd || [];
  window.oc.cmd.push(() => {
    window.oc.events.on('oc-date-time-now:ready', () => {
      window.oc.events.fire('supersonic-lobster:counter', store.getState().counter);
    });

    window.oc.events.on('oc-date-time-now:increase', (e, data) => {
      store.dispatch({
        type: types.SET_COUNTER,
        payload: data
      });
    });

    window.oc.events.on('oc-date-time-now:decrease', (e, data) => {
      store.dispatch({
        type: types.SET_COUNTER,
        payload: data
      });
    });
  });
};

export default ocInit;
