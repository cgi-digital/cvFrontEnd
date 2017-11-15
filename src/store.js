import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

// import Store2 from 'store2';
// Don't include for production.
import createLogger from 'redux-logger';

import ReduxThunk from 'redux-thunk';

import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import Reducers from './Reducers';
import { apiConfig } from './API';

// axios.defaults.headers.common['Authorization'] = 'Token ' + Store2.get('vestedyeti:key');
const client = axios.create(apiConfig);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    ReduxThunk,
    routerMiddleware(browserHistory),
    axiosMiddleware(client),
    createLogger({ level: 'info', collapsed: true })
  )
);

module.exports = function() {
  return createStore(Reducers, enhancer);
};
