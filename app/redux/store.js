import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const defaultState = {
    labels:{},
    languages:{},
    translations:{},
};

const Store = createStore(rootReducer, defaultState, applyMiddleware(thunkMiddleware));

export default Store;