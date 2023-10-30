const startbotton = document.getElementById('startbotton');
startbotton.addEventListener('click', start);
const stopbotton = document.getElementById('stopbotton');
stopbotton.addEventListener('click', stop);
window.ID =! null;
function stop(){
    chrome.tabs.query( {active:true, currentWindow:true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {message: 'stopreload'});
    });
    window.ID = null
};
function start(){
    const second = document.getElementById("sec");
    const interval = second.value + '000';
    if(ID){
        chrome.storage.local.set({'key': interval}, function () {
        });
          const reload = setInterval(function(){
            if(ID == null){
                clearInterval(reload);
            }
            chrome.tabs.query( {active:true, currentWindow:true}, function(tabs){
                chrome.tabs.sendMessage(tabs[0].id, {message: 'reloading'});
            });
        },interval);
    }
};