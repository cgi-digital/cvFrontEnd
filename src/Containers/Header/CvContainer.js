import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../Reducers/user';
import CvComponent from '../../Components/Header/CvComponent';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

class CvContainer extends Component {
  render() {
    return <CvComponent {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CvContainer)
