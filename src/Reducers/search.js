// Actions
// Define actions for each part of API request etc
export const SEARCH_UPDATE = 'SEARCH_UPDATE';

const initialState = '';

// Reducer is exported as default
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_UPDATE:
      return action.data.query;
    default:
      return state;
  }
}

// Action creator. Redux uses this to create an action.
export function updateSearch(query) {
  return {
    type: SEARCH_UPDATE,
    data: { query }
  };
}
