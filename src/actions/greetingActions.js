import model from '../model';
import * as types from '../constants/actionTypes';

export const getGreeting = () => ( // eslint-disable-line
  (dispatch) => {
    model.get('greeting')
      .then(
      response => (dispatch({
        type: types.GET_GREETING_COMPLETED,
        payload: response.json.greeting
      })),
      () => (dispatch({
        type: types.GET_GREETING_COMPLETED,
        payload: 'Oh Noes!'
      })));
  });
