const startbotton = document.getElementById('startbotton');
startbotton.addEventListener('click', start);
const stopbotton = document.getElementById('stopbotton');
stopbotton.addEventListener('click', stop);
function stop() {
    chrome.runtime.sendMessage({ message: 'stopreload' });
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const end_tab = tabs[0].id;
        chrome.runtime.sendMessage({ message: 'stopreload', locate: end_tab });
    });
};
function start() {
    const second = document.getElementById("sec");
    function checkNamber(n){
        if(typeof n !== "string" || n==="")return false;
        const num = Number(n);
        return isNaN(num) ? false : true;
    };
    if (checkNamber(second.value)) {
        const interval = second.value * 1000;
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const tab = tabs[0].id;
            chrome.runtime.sendMessage({ message: 'startreload', time: interval, locate: tab });
        });
    }
    else {
        alert("Please input umber")
    };
};