import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUser, postUser } from './Ducks/user';

import CvEditComponent from './CvEditComponent';

function mapStateToProps(state) {
  return { user: state.user };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserData: a => {
      dispatch(getUser(a));
    },
    postUserData: e => {
      e.preventDefault();
      dispatch(postUser());
    }
  };
}

class CvEditContainer extends Component {
  render() {
    return <CvEditComponent {...this.props} initialValues={
      this.props.user
    } handleSubmit={this.props.postUserData} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CvEditContainer)
