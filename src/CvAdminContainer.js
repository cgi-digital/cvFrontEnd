/* import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSkill } from './Ducks/skills';

import CvAdminComponent from './CvAdminComponent';

function mapStateToProps(state) {
  return { skill: state.skill, skills: state.skills.skills };
}

function mapDispatchToProps(dispatch) {
  return { 
    getSkill: a => {
      dispatch(getUser(a));
    }
  };
}

class CvAdminContainer extends Component {
  render() {
    return <CvAdminComponent {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CvAdminContainer)
 */