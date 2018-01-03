// comments.js

import axios from 'axios';
import qs from 'qs';

// Constants
import { API_URL } from '../API';
// Actions
// Define actions for each part of API request etc
export const SKILLS_LOAD = 'SKILLS_LOAD';
export const SKILLS_SUCCESS = 'SKILLS_SUCCESS';
export const SKILLS_FAILURE = 'SKILLS_FAILURE';
export const SKILLS_UPDATE = 'SKILLS_UPDATE';

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
  skill: null,
  minLevel: null,
  maxLevel: null,
  sfiaCode: null,
  type: null
};

// Reducer is exported as default
export default function reducer(state = initialState, action) {
  // Make a copy of state as newState

  // Switch with cases for each action type
  switch (action.type) {
    case 'SKILLS_SUCCESS':
      return action.data;
    case 'SKILLS_UPDATE':
      return action.data;
      break;

    // Default just returns copy of previous state, no changes made.
    default:
      return state;
  }
}

// To be imported into container component, and assigned via mapDispatchToProps
export function getAllSkills(params = {}) {
  return function (dispatch) {
    dispatch({ type: SKILLS_LOAD });
    // Axios - first argument is endpoint, second is params object
    axios
      .get(API_URL + 'skill/all')
      .then(function (response) {
        dispatch({ type: SKILLS_SUCCESS, data: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}
