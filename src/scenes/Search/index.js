import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUsers } from '../../Reducers/users';
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
      dispatch(getUsers(a));
    },
    onSearchChange: e => {
      dispatch(updateSearch(e.currentTarget.value));
    }
  };
}

class CvViewContainer extends Component {
  render() {
    return <CvSearchComponent {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CvViewContainer)
