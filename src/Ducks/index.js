import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import userReducer from './user';

const RootReducer = combineReducers({
  // Redux Form
  form: formReducer,
  routing: routerReducer,
  // API
  user: userReducer
});

export default RootReducer;
