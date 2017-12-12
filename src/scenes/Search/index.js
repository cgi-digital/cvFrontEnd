import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUsers, getAllUsers, getUsersBySkill } from '../../Reducers/users';
import { updateSearch } from '../../Reducers/search';

import CvSearchComponent from './component';

function mapStateToProps(state) {
  return {
    users: state.users,
    query: state.search
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUsers: a => {
      dispatch(getAllUsers());
    },
    onSearch: e => {
      dispatch(getUsers());
    },
    onSearchBySkill: e => {
      dispatch(getUsersBySkill(e));
    }
  };
}

class CvSearchContainer extends Component {
  render() {
    return <CvSearchComponent {...this.props}
      submitNameSearch={this.props.onSearch}
      submitSkillSearch={this.props.onSearchBySkill}
      getAllUsers={this.props.getUsers} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CvSearchContainer)
