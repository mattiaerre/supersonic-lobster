import model from './model';
import * as types from '../constants/actionTypes';

export const getGreeting = () => ( // eslint-disable-line
  (dispatch) => {
    const GREETING = 'greeting';
    model.get(GREETING)
      .then(
      response => (dispatch({
        type: types.GET_GREETING_COMPLETED,
        payload: response.json[GREETING]
      })),
      error => (dispatch({
        type: types.GET_GREETING_COMPLETED,
        payload: 'Oh Noes!',
        error
      })));
  });
