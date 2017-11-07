import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Login } from '../../Ducks/login';
import AuthComponent from './component';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    submitLogin:()=> {
      return dispatch(Login());
    },
    handleSubmitSuccess: () => {
    }
  };
}

class AuthContainer extends Component {
  render() {
    const { submitLogin, handleSubmitSuccess } = this.props;
    return (
      <AuthComponent
        {...this.props}
        onSubmit={submitLogin}
        onSubmitSuccess={handleSubmitSuccess}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)
