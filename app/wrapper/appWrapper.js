import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import App from '../App';
import { changeLanguage } from '../redux/actions/langActions';
import { receiveTranslation, postTranslation } from '../actions/redux/transActions';
import { receiveVision, postVision } from '../actions/redux/visionActions';

const mapStateToProps = state => {
    return {
        user : null
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        changeLanguage,
        receiveTranslation, postTranslation,
        receiveVision, postVision
    }, dispatch);
};

const Main = connect(mapStateToProps, mapDispatchToProps)(MainStack);

export default Main;