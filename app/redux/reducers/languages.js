import * as type from "../actionTypes";
import labels from "./labels";

function languages(state = [], action){
    switch (action.type) {
        case type.CHANGE_LANGUAGE:
            return Object.assign({}, state, {language:{lang:action.data}});
        default:
            return state;
    }
}

export default languages;