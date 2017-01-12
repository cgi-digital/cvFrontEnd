// comments.js

import axios from 'axios';

// Constants
import { API_URL } from '../API';
// Actions
// Define actions for each part of API request etc
const USER_LOAD = 'cv/user/LOAD';
const USER_SUCCESS = 'cv/user/SUCCESS';
const USER_FAILURE = 'cv/user/FAILURE';
const USER_UPDATE = 'cv/user/UPDATE';

// Reducer
// Initial State is the default object that is assigned to state.
const initialState = {
  id: '1',
  email: 'brucewayne@batman.com',
  firstname: 'Bruce',
  lastname: 'Wayne',
  title: 'Batman',
  summary: 'Ea inermis consequuntur vis, no nam nostro ornatus explicari. An sit scripta recusabo adversarium, vis lorem consulatu at. Tale mutat volutpat at sea. Mei altera equidem salutatus id, eos dicunt latine id. Graeci everti no mel, sint dicant laoreet duo at.',
  skills: [ { id: 1, name: 'Batarang' }, { id: 2, name: 'Batcave' } ],
  qualifications: [ { name: 'smart' }, { name: 'strong' } ],
  brexit: 'bad idea',
  specialism: 'DevOps'
};
// const initialState = {
//   id: null,
//   email: null,
//   firstname: null,
//   lastname: null,
//   title: null,
//   summary: null,
//   skills: [],
//   qualifications: [],
//   brexit: null,
//   specialism: null
// };
// Reducer is exported as default
export default function reducer(state = initialState, action) {
  // Make a copy of state as newState
  let newState = Object.assign({}, state);

  // Switch with cases for each action type
  switch (action.type) {
    case 'cv/user/SUCCESS':
      // On API success, grab action data and make newState from it
      newState = Object.assign({}, action.data);
      return newState;
    case 'cv/user/UPDATE':
      newState = Object.assign({}, action.data);
      return newState;
      break;
    // Default just returns copy of previous state, no changes made.
    default:
      return newState;
  }
}

// To be imported into container component, and assigned via mapDispatchToProps
export function getUser(params = {}) {
  return function(dispatch) {
    dispatch({ type: USER_LOAD });

    // Axios - first argument is endpoint, second is params object
    axios
      .get(API_URL + '/user/', params)
      .then(function(response) {
        dispatch({ type: USER_SUCCESS, data: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}

export function postUser(params = {}) {
  return function(dispatch, getState) {
    const currentState = getState();

    //
    // var commentData = Object.assign(data, {
    //   content_type: currentState.form.content_type_id_page,
    //   object_pk: currentState.page.id
    // })
    dispatch({ type: USER_UPDATE, data: currentState.form.cv_form.values });
    // axios.post(API_URL + '/comment/', commentData)
    //      .then(function(response) {
    //        dispatch({
    //          type: CREATE_COMMENT,
    //          comment: response.data
    //        })
    //      })
    //      .catch(function(error) {
    //        dispatch({ type: FAILURE });
    //        console.log(error);
    //      });
  };
}
//
// export function updateComment(comment) {
//   return { type: UPDATE, comment };
// }
//
// export function removeComment(comment) {
//   return { type: REMOVE, comment };
// }
