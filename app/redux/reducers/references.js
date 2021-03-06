import * as type from "../actionTypes";
import labels from "./labels";

function references(state = [], action){
    switch (action.type) {
        case type.SET_REFERENCE_ARNAV:
            return Object.assign({}, state, {arNav:action.data});
        case type.SET_REFERENCE_ARSCENE:
            return Object.assign({}, state, {arScene:action.data});
        default:
            return state;
    }
}

export default references;