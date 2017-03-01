import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUsers } from './Ducks/users';

import CvSearchComponent from './CvSearchComponent';

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUsers: a => {
      dispatch(getUsers(a));
    }
  };
}

class CvViewContainer extends Component {
  render() {
    return <CvSearchComponent {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CvViewContainer)
