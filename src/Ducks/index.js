import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import userReducer from './user';
import usersReducer from './users';
import skillsReducer from './skills';
import loginReducer from './login';

const RootReducer = combineReducers({
  // Redux Form
  form: formReducer,
  routing: routerReducer,
  // API
  skills: skillsReducer,
  user: userReducer,
  users: usersReducer,
  login: loginReducer,
});

export default RootReducer;
