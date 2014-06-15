var mychromeapps = {};

//adding listener when body is loaded to call init function.
window.addEventListener('load', onInit, false);


function onInit() {
    console.log("onInit()");
}
function onAlarm() {
    console.log("onAlarm()");
}

//chrome.runtime.onInstalled.addListener(onInit);
//chrome.alarms.onAlarm.addListener(onAlarm);
