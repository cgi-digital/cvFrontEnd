// comments.js

import axios from 'axios';
import qs from 'qs';

// Constants
import { API_URL } from '../API';
// Actions
// Define actions for each part of API request etc
export const USERS_LOAD = 'USERS_LOAD';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_FAILURE = 'USERS_FAILURE';
export const USERS_UPDATE = 'USERS_UPDATE';

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
const initialState = [];

// Reducer is exported as default
export default function reducer(state = initialState, action) {
  // Switch with cases for each action type
  switch (action.type) {
    case 'USERS_SUCCESS':

      // On API success, grab action data and make newState from it
      return action.data;
    case 'USERS_UPDATE':
      return action.data;
      break;

    // Default just returns copy of previous state, no changes made.
    default:
      return state;
  }
}

// To be imported into container component, and assigned via mapDispatchToProps
export function getUsers(params = {}) {
  return function (dispatch, getState) {
    const currentState = getState();
    const formState = currentState.form.search_form.values;
    dispatch({ type: USERS_LOAD });
    if (formState) {
      // SEARCH BY FIRST AND LAST NAME
      axios
        .get(API_URL + 'user/search/name?firstName=' + formState.firstname + '&lastName=' + formState.lastname)
        .then(function (response) {
          console.log("HERE");
          console.log(response);
          dispatch({ type: USERS_SUCCESS, data: response.data });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
