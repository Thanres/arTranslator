import {combineReducers} from 'redux';
import labels from "./labels";
import languages from "./languages";
import translations from "./translations";
import references from './references';
const rootReducer = combineReducers({
    labels,
    languages,
    translations,
    references,
});

export default rootReducer;