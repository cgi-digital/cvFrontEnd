// comments.js

import axios from 'axios';
import qs from 'qs';
//import { browserHistory } from 'react-router';
import { push } from 'react-router-redux';
import { SubmissionError } from 'redux-form'
// Constants
import { API_URL } from '../API';
// Actions
// Define actions for each part of API request etc
export const SINGUP_LOAD = 'SINGUP_LOAD';
export const SINGUP_SUCCESS = 'SINGUP_SUCCESS';
export const SINGUP_FAILURE = 'SINGUP_FAILURE';
export const SINGUP_UPDATE = 'SINGUP_UPDATE'; 

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
    case 'SIGNUP_SUCCESS':
      // On API success, grab action data and make newState from it
      //newState = Object.assign({}, action.data);
      return {
        ...state,
        user: { 
          ...state.user,
          ...action.data,
        },
      }

    case 'SIGNUP_FAILURE':
      //console.log("action data :", action.Username);
       newState = Object.assign({}, action.data);
       return newState;
    // Default just returns copy of previous state, no changes made.
    default:
      return newState;
  }
}



export function SignUp() {
  return function (dispatch, getState) {
    const currentState = getState();
    const formState = currentState.form.login_form.values;
    // const { Username, Password } = currentState.form.login_form.values;
    
    const stringifiedContents = qs.stringify(formState);

    axios
      .post(API_URL + 'security/register', stringifiedContents, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(function (response) {
        console.log("response: ", response);
        dispatch({ type: SINGUP_UPDATE, data: currentState.form.login_form.values });
        dispatch(push('/edit'));
      })
      .catch(function (error) {
        console.log("error: ", error);
        if (error.message === 'Network Error') {
          dispatch({ type: SINGUP_UPDATE, data: currentState.form.login_form.values });
          dispatch(push('/edit'));
        } else {
          dispatch({ type: SINGUP_FAILURE, Username: 'Username already Taken' });
          window.alert('Username already Taken');
          //throw new SubmissionError({ Username: 'Username already Taken', _error: SINGUP_FAILURE })
        }
      });
  };
}
