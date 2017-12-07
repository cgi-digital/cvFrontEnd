import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUser, postUser } from '../../Reducers/user';

import HomeComponent from './component';

function mapStateToProps(state) {
  return { user: state.user, skills: state.skills.skills };
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: a => {
      dispatch(getUser(a));
    },
    postUserData: e => {
      dispatch(postUser());
    },
    handleSubmitSuccess: a => {
      console.log("BOOM");
    }
  };
}

class CvViewContainer extends Component {
  render() {
    return <HomeComponent {...this.props}
      initialValues={this.props.user}
      handleSubmit={this.props.postUserData}
      onSubmitSuccess={this.props.handleSubmitSuccess}
    />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CvViewContainer)
