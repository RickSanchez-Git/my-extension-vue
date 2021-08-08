
var newTitle = '';
var key = 'title';

chrome.tabs.onActiveChanged.addListener(function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        newTitle = tabs[0].title;
        chrome.storage.sync.set({key: newTitle});
    });
})
