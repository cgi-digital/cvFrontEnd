import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProfile, postProfile } from '../../Reducers/profile';

import CvProfileComponent from './component';

function mapStateToProps(state) {
  return { 
    profile: state.profile
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProfile: a => {
      dispatch(getProfile(a));
    },
    postProfile: e => {
      dispatch(postProfile());
    },
    handleSubmitSuccess: a => {
      console.log("BOOM");
    }
  };
}

class CvProfileContainer extends Component {
  render() {
    return <CvProfileComponent {...this.props}
      initialValues={this.props.profile}
      handleSubmit={this.props.postProfile}
      onSubmitSuccess={this.props.handleSubmitSuccess}
    />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CvProfileContainer)
