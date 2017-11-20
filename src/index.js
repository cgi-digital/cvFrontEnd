import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//import getMuiTheme from 'material-ui/styles/getMuiTheme';
import  {grabMuiTheme} from './ColourScheme';
//import  {test} from './ColourScheme';
import { Routes } from './routes';
import configureStore from './store';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import './App.css';
//import './utils/colors';

// var _colors = require('./utils/colors');
// var _colorManipulator = require('material-ui/utils/colorManipulator');
// var _spacing = require('material-ui/styles/spacing');
// var _spacing2 = _interopRequireDefault(_spacing);
// function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
var muiTheme = grabMuiTheme();


 //
const App = <Provider store={store}>
  <MuiThemeProvider muiTheme={muiTheme}> 
  <div className='app__container'>
    <Router history={history} routes={Routes} />
  </div>
  </MuiThemeProvider>
</Provider>;

ReactDOM.render(App, document.getElementById('root'));
