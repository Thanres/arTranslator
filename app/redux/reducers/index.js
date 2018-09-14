import {combineReducers} from 'redux';
import labels from "./labels";
import languages from "./languages";
import translations from "./translations"
const rootReducer = combineReducers({
    labels,
    languages,
    translations,
});

export default rootReducer;