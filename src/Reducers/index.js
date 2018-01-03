import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import profileReducer from './profile';
import usersReducer from './users';
import loginReducer from './login';
import searchReducer from './search';
import skillsReducer from './skills';

const RootReducer = combineReducers({
  // Redux Form
  form: formReducer,
  routing: routerReducer,
  // API
  profile: profileReducer,
  users: usersReducer,
  login: loginReducer,
  skills : skillsReducer
});

export default RootReducer;
