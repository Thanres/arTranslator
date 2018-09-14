import * as type from "../actionTypes";

export function receiveVision(data){
    return{
        type:type.RECEIVE_VISION,
        data:data,
    }
}

export function postVision(){
    return {
        type:type.POST_VISION
    }
}