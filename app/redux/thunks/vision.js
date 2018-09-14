import {postVision, receiveVision} from "../actions/visionActions";
import {cloudManagerVision} from "../../api/cloudManager";


export function vision(imageData){
    return function (dispatch){
        dispatch(postVision());
        return cloudManagerVision(imageData).then(response=>{
            dispatch(receiveVision(response));
        })
    }
}