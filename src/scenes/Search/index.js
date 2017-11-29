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
    onSearch: e => {
      e.preventDefault();
      dispatch(getUsers(e));
    }
  };
}

class CvSearchContainer extends Component {
  render() {
    return <CvSearchComponent {...this.props} initialValues={
      {firstname:'', lastname:''}
    }
      handleSubmit={this.props.onSearch} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CvSearchContainer)
