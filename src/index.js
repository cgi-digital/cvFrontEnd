import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { Routes } from './routes';
import configureStore from './store';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const App = <Provider store={store}>
  <div className='app__container'>
    <Router history={history} routes={Routes} />
  </div>
</Provider>;

ReactDOM.render(App, document.getElementById('root'));
