import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import ocInit from './oc-init';
import App from './containers/App/App';

const store = configureStore();
ocInit(store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
