import React from 'react';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import store from '../redux/store';

import App from '../App';
import { changeLanguage } from '../redux/actions/langActions';
import { receiveTranslation, postTranslation } from '../redux/actions/transActions';
import { receiveVision, postVision } from '../redux/actions/visionActions';
import { setARNavRef, setARSceneRef } from '../redux/actions/referenceActions';
import { vision } from '../redux/thunks/vision'
import { translation } from '../redux/thunks/translation'

const mapStateToProps = state => {
    return {
        labels : state.labels,
        languages : state.languages,
        translations : state.translations,
        references : state.references
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        vision,
        setARSceneRef,
        setARNavRef,
        changeLanguage,
        translation
    }, dispatch);
};

const AppS = connect(mapStateToProps, mapDispatchToProps)(App);

const appWrapper = () => (
    <Provider store={store}>
        <AppS />
    </Provider>
);


export default appWrapper;