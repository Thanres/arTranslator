
import {cloudManagerTranslation} from "../../api/cloudManager";
import {postTranslation, receiveTranslation} from "../actions/transActions";

export function translation(lable,lang){
    return function (dispatch){
        dispatch(postTranslation());
        return cloudManagerTranslation(lable,lang).then(response=>{
            dispatch(receiveTranslation(response));
        })
    }
}