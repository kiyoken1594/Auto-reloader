chrome.runtime.onMessage.addListener(function (request) {
    if (request.message == 'startreload') {
        const timer = request.time;
        const tab = request.locate;
        let paused = false
        const timerID = setInterval(function () {
            if (paused) {
                clearInterval(timerID);
                chrome.tabs.sendMessage(tab, { text: "stop"});
                return;
            };
            chrome.tabs.reload(tab);
            chrome.tabs.sendMessage(tab, { text: "loading"});
        }, timer);
        chrome.runtime.onMessage.addListener(function (request) {
            if (request.message == 'stopreload') {
                if (tab == request.locate){
                    paused = true;
                };
            };
        });
    };
});