import * as types from '../constants/actionTypes';
import model from './model';

export const getFalcorModel = () => ( // eslint-disable-line import/prefer-default-export
  (dispatch) => {
    const query = [['apod', ['date', 'explanation', 'media_type', 'url']], ['greeting']];
    model.get(...query)
      .then(
      (response) => {
        const json = response ? response.json : {};
        return dispatch({ type: types.GET_FALCOR_MODEL, payload: json });
      },
      error => (dispatch({ type: types.GET_FALCOR_MODEL, error })));
  });
