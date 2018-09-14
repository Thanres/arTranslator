import * as type from '../actionTypes';

export function changeLanguage(data){
    return{
        type: type.CHANGE_LANGUAGE,
        data:data,
    }
}