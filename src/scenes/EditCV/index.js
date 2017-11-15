import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUser, postUser } from '../../Reducers/user';
import { deleteSkill } from '../../Reducers/skills';

import CvEditComponent from './component';

function mapStateToProps(state) {
  return { skills: state.skills, user: state.user };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserData: a => {
      dispatch(getUser(a));
    },
    postUserData: e => {
      e.preventDefault();
      dispatch(postUser());
    },
    deleteSkill: id => {
      dispatch(deleteSkill(id));
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
