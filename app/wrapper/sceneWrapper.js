import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import App from '../App';
import { toggleMenu, setGesturesState, setBarStyle } from '../actions/menuActions';
import { getProfile, logout } from '../actions/userActions';
import { getPosts } from '../actions/postActions';


const mapStateToProps = state => {
    return {
        user: state.user,
        posts: state.posts,
        color: state.color,
        translate: getTranslate(state.locale),
        currentLanguage: getActiveLanguage(state.locale).code
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        toggleMenu, setGesturesState, setBarStyle,
        getProfile, logout,
        getPosts
    }, dispatch);
};

const Main = connect(mapStateToProps, mapDispatchToProps)(MainStack);

export default Main;