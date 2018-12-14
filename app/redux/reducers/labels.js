import * as type from "../actionTypes";

function labels(state = [], action){
    switch (action.type) {
        case type.POST_VISION:
            return Object.assign({}, state, {isLoading:true});

        case type.RECEIVE_VISION:
            return Object.assign({}, state, {isLoading:false,enLabel:action.data.label});
        default:
            return state;
    }
}

export default labels;
