chrome.runtime.onMessage.addListener(function (request) {
    console.log(request.text);
});
chrome.runtime.onMessage.addListener(function (request) {
    const this_tab = request.locate;
    console.log(this_tab)
});