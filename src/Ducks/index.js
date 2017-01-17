import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import userReducer from './user';
import skillsReducer from './skills';
import loginReducer from './login';

const RootReducer = combineReducers({
  // Redux Form
  form: formReducer,
  routing: routerReducer,
  // API
  skills: skillsReducer,
  user: userReducer,
  login: loginReducer,
});

export default RootReducer;
