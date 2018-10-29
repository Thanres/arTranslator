import * as type from "../actionTypes";


//TODO
export function setNavRef(data){
    return{
        type:type.SET_NAVIGATOR_REFERENCE,
        data:data,
    }
}


//Receivevision/Postvision equivalent..?
export function hideARLabel(){
    return {
        type:type.HIDE_AR_LABEL
    }
}

export function showARLabel(){
    return {
        type:type.SHOW_AR_LABEL
    }
}