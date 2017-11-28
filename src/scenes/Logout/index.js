import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Logout } from '../../Reducers/logout';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    submitLogout:()=> {
      return dispatch(Logout());
    }
  };
}

class LogoutContainer extends Component {
  render() {
    const { submitLogout } = this.props;
    submitLogout();
    return null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutContainer)
