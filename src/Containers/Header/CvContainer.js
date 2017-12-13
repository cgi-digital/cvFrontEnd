import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../Reducers/user';
import CvComponent from '../../Components/Header/CvComponent';

function mapStateToProps(state) {
  return { user: state.user };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     getUser: a => {
//       dispatch(getUser(a));
//     }
//   };
// }

class CvContainer extends Component {
  render() {
    return <CvComponent {...this.props} />;
  }
}

export default connect(mapStateToProps)(CvContainer)
