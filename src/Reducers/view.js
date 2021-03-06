// comments.js

import axios from 'axios';
import qs from 'qs';

// Constants
import { API_URL } from '../API';
// Actions
// Define actions for each part of API request etc
export const PROFILE_LOAD = 'PROFILE_LOAD';
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS';
export const PROFILE_FAILURE = 'PROFILE_FAILURE';
export const PROFILE_UPDATE = 'PROFILE_UPDATE';

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
  id: null,
  email: null,
  firstname: null,
  lastname: null,
  title: null,
  summary: null
};

// Reducer is exported as default
export default function reducer(state = initialState, action) {
  // Make a copy of state as newState
  let newState = Object.assign({}, state);

  // Switch with cases for each action type
  switch (action.type) {
    case 'PROFILE_SUCCESS':
      // On API success, grab action data and make newState from it
      newState = Object.assign({}, action.data);
      return newState;
    case 'PROFILE_UPDATE':
      newState = Object.assign({}, action.data);
      return newState;
      break;

    // Default just returns copy of previous state, no changes made.
    default:
      return newState;
  }
}

// To be imported into container component, and assigned via mapDispatchToProps
export function getProfile(params = {}) {
  return function (dispatch) {
    const id = params;
    dispatch({ type: PROFILE_LOAD });
    // Axios - first argument is endpoint, second is params object
    axios
      .get(API_URL + 'user/id/' + id)
      .then(function (response) {
        dispatch({ type: PROFILE_SUCCESS, data: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
