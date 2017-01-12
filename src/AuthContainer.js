import React, { Component } from 'react';
import { connect } from 'react-redux';

import AuthComponent from './AuthComponent';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

class AuthContainer extends Component {
  render() {
    return <AuthComponent {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)
