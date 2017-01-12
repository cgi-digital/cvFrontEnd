import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppComponent from './AppComponent';

// Here we grab parts of the store and assign them to props
function mapStateToProps(state) {
  return {};
}

// These actions will be turned into props
function mapDispatchToProps(dispatch) {
  return {};
}

// Container should only return a component with props
class AppContainer extends Component {
  render() {
    return <AppComponent {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
