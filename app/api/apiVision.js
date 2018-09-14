
import {googleApiKey} from "./apiKeys"
/**
 * @description api call for the sending of the image data to the GoogleVision api
 * @param imageData Base64-encoded image data
 * @returns {Promise<Response> | *}
 */
export function apiVision(imageData) {
    return fetch("https://vision.googleapis.com/v1/images:annotate?key=" + googleApiKey, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        credentials: 'omit',
        body: JSON.stringify(
            {
                "requests":[{
                    "image":{
                        "content": imageData
                    },
                    "features":[{
                        "type":"LABEL_DETECTION"
                    }]
                }]
            }
        )
    })
}