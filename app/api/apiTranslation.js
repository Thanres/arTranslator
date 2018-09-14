import {googleApiKey} from "./apiKeys";

export function apiTranslation(label,lang) {
    return fetch("https://translation.googleapis.com/language/translate/v2?key=" + googleApiKey, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        credentials: 'omit',
        body: JSON.stringify(
            {
                "q": label,
                "target":lang
            }
        )
    })
}