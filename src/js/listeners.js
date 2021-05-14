import { start, stop } from "./controller.js";
import stateContainer from "./state/ephemeral.js";

export function listen() {
    chrome.browserAction.onClicked.addListener((tab) => {
        if (stateContainer.isOn) stop();
        else start();
    });
}
