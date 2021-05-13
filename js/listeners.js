import { start } from "./controller.js";

export function listen() {
    chrome.browserAction.onClicked.addListener((tab) => {
        start();
    });
}