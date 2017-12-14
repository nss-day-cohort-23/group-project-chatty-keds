"use strict";

const clearMsgs = document.getElementById("clearMsgs");
const emptyMsg = document.getElementById("empty-msg");

const disableClearBtn = () => {
    clearMsgs.classList.add("disabled");
    clearMsgs.disabled = true;
};
const enableClearBtn = () => {
    clearMsgs.classList.remove("disabled");
    clearMsgs.disabled = false;
};

const showEmptyMsg = () => {
    emptyMsg.classList.remove("hidden");
};
const hideEmptyMsg = () => {
    emptyMsg.classList.add("hidden");
};

const checkMsgCount = () => {
    const adder = require('./add');
    let msgs = adder.getMessages();
	if (msgs.length > 0) {
        enableClearBtn();
        hideEmptyMsg();
	} else {
        disableClearBtn();
        showEmptyMsg();
    }
};

module.exports = {checkMsgCount};