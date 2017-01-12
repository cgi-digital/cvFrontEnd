import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

// import Store2 from 'store2';
// Don't include for production.
import createLogger from 'redux-logger';

import ReduxThunk from 'redux-thunk';

import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import Ducks from './Ducks';
import { apiConfig } from './API';

// axios.defaults.headers.common['Authorization'] = 'Token ' + Store2.get('vestedyeti:key');
const client = axios.create(apiConfig);

const enhancer = compose(
  applyMiddleware(
    ReduxThunk,
    routerMiddleware(browserHistory),
    axiosMiddleware(client),
    createLogger({ level: 'info', collapsed: true })
  )
);

module.exports = function() {
  return createStore(Ducks, enhancer);
};
