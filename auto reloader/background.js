chrome.runtime.onMessage.addListener(function (request) {
    if (request.text ==  "startreload" ){
        console.log(request.text); 
        chrome.storage.local.get("key", function (interval) {
            const interval_data = interval.key;
            chrome.tabs.query({active : true}, (tabs) => {
            let ID;
            if (!ID) {
                ID = setInterval(go, interval_data);
            };
                function go() {chrome.tabs.sendMessage(tabs[0].id, {text : "START"});
                };
            chrome.runtime.onMessage.addListener(function (request) {
                if (request.text ==  "stopreload" ){
                    clearInterval(ID);
                    ID = null;
                    console.log('stop');
                };
            });
            });
        });
    };
});