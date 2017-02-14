import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Store2 from 'store2';
import { Login } from './Ducks/login';

import AuthComponent from './AuthComponent';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    submitLogin:()=> {
      dispatch(Login());
      // push('cv/edit');
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
