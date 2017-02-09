import model from './model';
import * as types from '../constants/actionTypes';

export const getApod = () => ( // eslint-disable-line
  (dispatch) => {
    const APOD = 'apod';
    model.get([APOD, ['explanation', 'url']])
      .then(
      response => (dispatch({
        type: types.GET_APOD_COMPLETED,
        payload: response.json[APOD]
      })),
      error => (dispatch({
        type: types.GET_APOD_COMPLETED,
        payload: 'Oh Noes!',
        error
      })));
  });
