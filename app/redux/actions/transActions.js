import * as type from "../actionTypes";

export function receiveTranslation(data){
    return{
        type:type.RECEIVE_TRANSLATIONS,
        data:data,
    }
}

export function postTranslation(){
    return {
        type:type.POST_TRANSLATIONS
    }
}