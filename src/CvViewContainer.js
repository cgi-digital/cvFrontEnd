import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUser } from './Ducks/user';

import CvViewComponent from './CvViewComponent';

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
    return <CvViewComponent {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CvViewContainer)
