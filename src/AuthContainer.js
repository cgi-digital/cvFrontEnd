import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Login } from './Ducks/login';

import AuthComponent from './AuthComponent';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    submitLogin:()=> {

     Login();

  }
  };
}

class AuthContainer extends Component {
  render() {
    return <AuthComponent {...this.props} handleSubmit={this.props.submitLogin} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)
