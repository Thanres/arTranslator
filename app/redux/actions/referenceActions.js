import * as type from '../actionTypes';

export function setARNavRef(data){
    return{
        type: type.SET_REFERENCE_ARNAV,
        data:data,
    }
}


export function setARSceneRef(data){
    return{
        type: type.SET_REFERENCE_ARSCENE,
        data:data,
    }
}