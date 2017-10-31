import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SignUp } from './Ducks/signUp';
import SignUpComponent from './SignUpComponent';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    submitSignUp:()=> {
       return dispatch(SignUp());
    }, 
    handleSubmitSuccess: () => {
    }
  };
}

class SignUpContainer extends Component {
  render() {
    const { submitSignUp, handleSubmitSuccess, handleSubmit } = this.props; 
    return (
      <SignUpComponent
        {...this.props}
        onSubmit={submitSignUp}
        onSubmitSuccess={handleSubmitSuccess}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer)
