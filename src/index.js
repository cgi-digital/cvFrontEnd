import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Routes } from './routes';
import configureStore from './store';

import './index.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const App = <Provider store={store}>
  <MuiThemeProvider>
  <div className='app__container'>
    <Router history={history} routes={Routes} />
  </div>
  </MuiThemeProvider>
</Provider>;

ReactDOM.render(App, document.getElementById('root'));
