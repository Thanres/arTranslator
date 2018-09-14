import * as type from "../actionTypes";

function labels(state = [], action){
    switch (action.type) {
        case type.POST_VISION:
            return Object.assign({}, state, {labels:{isLoading:true}});

        case type.RECEIVE_VISION:
            return Object.assign({}, state, {labels:{isLoading:false,enLabel:action.data}});
        default:
            return state;
    }
}

export default labels;
