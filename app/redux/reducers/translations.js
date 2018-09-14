import * as type from "../actionTypes";
import labels from "./labels";

function translations(state = [], action){
    switch (action.type) {
        case type.POST_TRANSLATIONS:
            return Object.assign({}, state, {translated:{isLoading:true}});

        case type.RECEIVE_TRANSLATIONS:
            return Object.assign({}, state, {translated:{isLoading:false,transLabel:action.data}});
        default:
            return state;
    }
}

export default translations;