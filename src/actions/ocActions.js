import * as types from '../constants/actionTypes';

export const renderUnloadedComponents = () => { // eslint-disable-line
  if (window.oc) {
    window.oc.renderUnloadedComponents();
  }
  return {
    type: types.RENDER_UNLOADED_COMPONENTS
  };
};
