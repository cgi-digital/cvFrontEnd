import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './colors';

var _colors = require('./colors');
var _colorManipulator = require('material-ui/utils/colorManipulator');

var _spacing = require('material-ui/styles/spacing');

var _spacing2 = _interopRequireDefault(_spacing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

export function grabMuiTheme(){
  var muiTheme = getMuiTheme({
    spacing: _spacing2.default,
    fontFamily: 'Arial, Helvetica Neue',
    borderRadius: 2,
    palette: {
      primary1Color: _colors.cgiRed,
      primary2Color: _colors.cgiBeet,
      primary3Color: _colors.cgiPumpkin,
      accent1Color: _colors.cgiHoney,
      accent2Color: _colors.cgiCloud,
      accent3Color: _colors.cgiIce,
      textColor: _colors.darkBlack,
      secondaryTextColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.54),
      alternateTextColor: _colors.white,
      canvasColor: _colors.white,
      borderColor: _colors.grey300,
      disabledColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.3),
      pickerHeaderColor: _colors.cyan500,
      clockCircleColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.07),
      shadowColor: _colors.fullBlack,
    },
  });
  console.log("plz2");
  return muiTheme;
}
