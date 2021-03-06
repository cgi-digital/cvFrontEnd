import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Register } from '../../Reducers/register';
import RegisterComponent from './component';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    submitRegister:()=> {
       return dispatch(Register());
    }, 
    handleRegisterSuccess: () => {
    }
  };
}

class RegisterContainer extends Component {
  render() {
    return (
      <RegisterComponent
        {...this.props}
        onSubmit={this.props.submitRegister}
        onSubmitSuccess={this.props.handleRegisterSuccess}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)
