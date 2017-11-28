import axios from 'axios';
import qs from 'qs';
import { push } from 'react-router-redux';
import { SubmissionError } from 'redux-form'
// Constants
import { API_URL } from '../API';

// Actions
// Define actions for each part of API request etc
export const LOGOUT_LOAD = 'LOGOUT_LOAD';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const LOGOUT_UPDATE = 'LOGOUT_UPDATE';

// Reducer
// Initial State is the default object that is assigned to state.
// const initialState = {
//   id: '1',
//   email: 'brucewayne@batman.com',
//   firstname: 'Bruce',
//   lastname: 'Wayne',
//   title: 'Batman',
//   summary: 'Ea inermis consequuntur vis, no nam nostro ornatus explicari. An sit scripta recusabo adversarium, vis lorem consulatu at. Tale mutat volutpat at sea. Mei altera equidem salutatus id, eos dicunt latine id. Graeci everti no mel, sint dicant laoreet duo at.',
// };
const initialState = {};

// Reducer is exported as default
export default function reducer(state = initialState, action) {
  // Make a copy of state as newState
  let newState = Object.assign({}, state);

  // Switch with cases for each action type
  switch (action.type) {
    case 'LOGOUT_SUCCESS':
      // On API success, grab action data and make newState from it
     //newState = Object.assign({}, action.data);
      return {
        ...state,
        user: {
          ...state.user,
          ...action.data,
        },
  }


    // Default just returns copy of previous state, no changes made.
    default:
      return newState;
  }
}



export function Logout() {
  return function(dispatch, getState) {
    const currentState = getState();

    return axios.post(API_URL + 'security/logout', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(function(response) {
        dispatch({ type: LOGOUT_UPDATE });
        dispatch(push('/login'));
      })
      .catch(function(error) {
        if (error.message === 'Network Error') {
          dispatch({ type: LOGOUT_UPDATE });
          dispatch(push('/login')); 
        } else if(error.response.status === 500){
          dispatch({type: LOGOUT_FAILURE});
          throw new SubmissionError({ ResponseMessage: "ERROR 400 - Server can not be reached", _error: LOGOUT_FAILURE});
        } else if(error.response.status === 400){
          dispatch({ type: LOGOUT_FAILURE });
          throw new SubmissionError({ ResponseMessage: 'ERROR 400', _error: 'LOGOUT_FAILURE' });
        }
      });
  };
}