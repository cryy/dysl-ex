import { stateContainer } from "./state/ephemeral.js";

export function start() {

    stateContainer.isOn = true;

    chrome.browserAction.setBadgeText({
        text: "UKLJ"
    });
}

export function stop() {

    stateContainer.isOn = false;

    chrome.browserAction.setBadgeText({
        text: ""
    });
}