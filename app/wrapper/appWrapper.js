import React from 'react';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import store from '../redux/store';

import App from '../App';
import { changeLanguage } from '../redux/actions/langActions';
import { receiveTranslation, postTranslation } from '../redux/actions/transActions';
import { receiveVision, postVision } from '../redux/actions/visionActions';

const mapStateToProps = state => {
    return {
        labels : null,
        languages : null,
        translations : null,
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        changeLanguage,
        receiveTranslation, postTranslation,
        receiveVision, postVision
    }, dispatch);
};

const AppS = connect(mapStateToProps, mapDispatchToProps)(App);

const appWrapper = () => (
    <Provider store={store}>
        <AppS />
    </Provider>
);


export default appWrapper;