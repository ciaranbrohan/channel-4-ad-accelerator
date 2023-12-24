chrome.webNavigation.onCompleted.addListener((details) => {
  if (details.url) {
    chrome.scripting.executeScript({
      target: { tabId: details.tabId },
      files: ["content.js"],
    });
  }
});

chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
  if (details.url) {
    chrome.scripting.executeScript({
      target: { tabId: details.tabId },
      files: ["content.js"],
    });
  }
});
