import {apiVision} from "./apiVision";
import {apiTranslation} from "./apiTranslation";
import RNFS from "react-native-fs";
export async function cloudManagerVision(image){
    let imageB64=await RNFS.readFile(image,"base64");
    let response= await apiVision(imageB64);
    let data= await response.json();
    let returnData;
    if(response.ok){
        returnData={isError:false,label:data.responses[0].labelAnnotations[0].description};

    }else{
        returnData={isError:true,errorMsg:data}
    }
    
    return returnData;
}

export async function cloudManagerTranslation(label,lang){
    let response= await apiTranslation(label,lang);
    let data=await response.json();
    let returnData;
    if(response.ok){
        returnData={isError:false,translatedLabel:data.data.translations[0].translatedText}
    }else{
        returnData={isError:true,errorMsg:data}
    }
    return returnData;
}