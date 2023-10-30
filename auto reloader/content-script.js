chrome.runtime.onMessage.addListener(function(request){
    if(request.message == 'reloading'){
        window.location.reload();
    };
    console.log(request.message);
});