// comments.js

import axios from 'axios';
import qs from 'qs';
//import { browserHistory } from 'react-router';
import { push } from 'react-router-redux';

// Constants
import { API_URL } from '../API';
import { SubmissionError } from 'redux-form'
// Actions
// Define actions for each part of API request etc
export const LOGIN_LOAD = 'LOGIN_LOAD';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_UPDATE = 'LOGIN_UPDATE';

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
const initialState = {
//   id: null,
//   email: null,
//   firstname: null,
//   lastname: null,
//   title: null,
//   summary: null
 };

// Reducer is exported as default
export default function reducer(state = initialState, action) {
  // Make a copy of state as newState
  let newState = Object.assign({}, state);

  // Switch with cases for each action type
  switch (action.type) {
    case 'LOGIN_SUCCESS':
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



export function Login() {
  return function(dispatch, getState) {
    const currentState = getState();
    const formState = currentState.form.login_form.values;
    // const { Username, Password } = currentState.form.login_form.values;
    const stringifiedContents = qs.stringify(formState);

    return axios.post(API_URL + 'security/login', stringifiedContents, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(function(response) {
        dispatch({ type: LOGIN_UPDATE, data: currentState.form.login_form.values });
        dispatch(push('/edit'));
      })
      .catch(function(error) {
        if (error.message === 'Network Error') {
          dispatch({ type: LOGIN_UPDATE, data: currentState.form.login_form.values });
          dispatch(push('/edit'));
        } else {
          dispatch({ type: LOGIN_FAILURE });
          throw new SubmissionError({ Password: 'wrong username and password combination', _error: 'LOGIN_FAILURE' });
        }
      });
  };
}
