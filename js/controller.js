export function start() {
    chrome.browserAction.setBadgeText({
        text: "UKLJ"
    });

    setTimeout(() => {
        chrome.browserAction.setBadgeText({
            text: ""
        });
    }, 3000);
}