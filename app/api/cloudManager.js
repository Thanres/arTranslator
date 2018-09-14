import {apiVision} from "./apiVision";
import {apiTranslation} from "./apiTranslation";

export async function cloudManagerVision(image){
    //ändern wen net direkt image als base64
    let response= await apiVision(image);
    let data= await response.json();
    let returnData;
    if(response.ok){
        returnData={isError:false,label:data.responses[0].labelAnnotations[0].description};

    }else{
        returnData={isError:true,errorMsg:data}
    }
    await console.log(returnData);
    console.log("vision");
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
    await console.log(returnData);
    console.log("translation");
    return returnData;
}