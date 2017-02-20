import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { FalcorProvider } from 'redux-falcor';
import model from './actions/model';
import configureStore from './store/configureStore';
import ocInit from './oc-init';
import App from './containers/App/App';

const store = configureStore();
ocInit(store);

render(
  <Provider store={store}>
    <FalcorProvider store={store} falcor={model}>
      <App />
    </FalcorProvider>
  </Provider>,
  document.getElementById('app')
);
