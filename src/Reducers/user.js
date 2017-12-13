// comments.js

import axios from 'axios';
import qs from 'qs';

// Constants
import { API_URL } from '../API';
// Actions
// Define actions for each part of API request etc
export const USER_LOAD = 'USER_LOAD';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';
export const USER_UPDATE = 'USER_UPDATE';

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
    case 'USER_SUCCESS':
      // On API success, grab action data and make newState from it
      newState = Object.assign({}, action.data);
      return newState;
    case 'USER_UPDATE':
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
    dispatch({ type: USER_LOAD });

    // Axios - first argument is endpoint, second is params object
    axios
      .get(API_URL + 'user')
      .then(function (response) {
        dispatch({ type: USER_SUCCESS, data: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

const addUserEntity = (entityName, payload) => {
  return axios
    .post(API_URL + `user/${entityName}`, qs.stringify(payload), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
};

export function postProfile(params = {}) {
  return function (dispatch, getState) {
    const currentState = getState();
    const formState = currentState.form.cv_form.values;

    console.log(formState);

    // Add new skills independently
    formState.skills.filter(k => !k.id).forEach(skill => {
      addUserEntity('skills', skill);
    });
    formState.projects.filter(k => !k.id).forEach(project => {
      addUserEntity('projects', Object.keys(project).reduce((prev, next) => {
        if (next === 'projectName') {
          prev.project = project.projectName;
        } else {
          prev[next] = project[next];
        }
        return prev;
      }, {}));
    });
    formState.qualifications.filter(k => !k.id).forEach(qualification => {
      addUserEntity('qualifications', qualification);
    });

    // TODO: Find a way to save these
    const rootFields = Object.keys(formState).reduce((prev, next) => {
      if (['firstname', 'lastname', 'title'].includes(next)) {
        prev[next] = formState[next];
      }
      return prev;
    }, {});

    // dispatch({ type: USER_UPDATE, data: currentState.form.cv_form.values });
    /*axios
      .post(API_URL + 'user', qs.stringify(rootFields), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(function(response) {
        dispatch({ type: USER_UPDATE, data: currentState.form.cv_form.values });
      })
      .catch(function(error) {
        dispatch({ type: USER_FAILURE });
        console.log(error);
      });*/
    
    dispatch({ type: USER_UPDATE, data: currentState.form.cv_form.values });
  };
}
