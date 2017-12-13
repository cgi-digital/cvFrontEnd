import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProfile } from '../../Reducers/view';

import CvViewComponent from './component';

function mapStateToProps(state) {
    return {
        profile: state.profile
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getProfile: i => {
            dispatch(getProfile(i));
        }
    };
}

class CvViewContainer extends Component {
    render() {
        return <CvViewComponent {...this.props} />;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CvViewContainer)
