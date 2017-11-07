import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUser } from '../../Ducks/user';

import HomeComponent from './component';

function mapStateToProps(state) {
  return { user: state.user, skills: state.skills.skills };
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: a => {
      dispatch(getUser(a));
    }
  };
}

class CvViewContainer extends Component {
  render() {
    return <HomeComponent {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CvViewContainer)
