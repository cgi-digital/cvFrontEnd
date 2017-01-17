/**
 * Created by jm on 13/01/2017.
 */
// comments.js
import _ from 'lodash';
import axios from 'axios';

// Constants
import { API_URL } from '../API';
// Actions
// Define actions for each part of API request etc
import { USER_SUCCESS } from './user.js';

const USER_SKILL_DELETE = 'USER_SKILL_DELETE';
const USER_SKILL_DELETE_SUCCESS = 'USER_SKILL_DELETE_SUCCESS';
const USER_SKILL_DELETE_FAILURE = 'USER_SKILL_DELETE_FAILURE';

// Reducer
// Initial State is the default object that is assigned to state.
const initialState = { skills: [] };
// Reducer is exported as default
export default function reducer(state = initialState, action) {
  // Make a copy of state as newState
  let newState = Object.assign({}, state);
  // Switch with cases for each action type
  switch (action.type) {
    case 'USER_SUCCESS':
      newState.skills = [ ...action.data.skills ];
      return newState;
    case 'USER_SKILL_DELETE_SUCCESS':
      // return a copy of previous state.skills without the item we just deleted
      // find item by ID that was attached to the action
      newState.skills = _.without(state.skills, { id: action.id });
      return newState;

    // Default just returns copy of previous state, no changes made.
    default:
      return newState;
  }
}

export function deleteSkill(id) {
  return function(dispatch) {
    dispatch({ type: USER_SKILL_DELETE });

    axios
      .delete(API_URL + 'user/skills/' + id)
      .then(function() {
        dispatch({ type: USER_SKILL_DELETE_SUCCESS, id: id });
      })
      .catch(function(error) {
        dispatch({ type: USER_SKILL_DELETE_FAILURE, error: error });
      });
  };
}
