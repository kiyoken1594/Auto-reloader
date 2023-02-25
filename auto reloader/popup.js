const startbotton = document.getElementById('startbotton');
startbotton.addEventListener('click', start);
const stopbotton = document.getElementById('stopbotton');
stopbotton.addEventListener('click', stop);

function stop(){
    chrome.runtime.sendMessage({ text: "stopreload" }
    );
    return;
};
function start(){
    const second = document.getElementById("sec");
    const interval = second.value + '000';
    chrome.storage.local.set({'key': interval}, function () {
    });
    chrome.runtime.sendMessage({ text: "startreload" }
    );
};