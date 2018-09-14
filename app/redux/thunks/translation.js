
import {cloudManagerTranslation} from "../../api/cloudManager";
import {postTranslation, receiveTranslation} from "../actions/transActions";

export function translation(imageData){
    return function (dispatch){
        dispatch(postTranslation());
        return cloudManagerTranslation(imageData).then(response=>{
            dispatch(receiveTranslation(response));
        })
    }
}