"use strict";

const router = require('./messages-router');

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
    let msgs = router.getMsgs();
	if (msgs && msgs.length > 0) {
        enableClearBtn();
        hideEmptyMsg();
	} else {
        disableClearBtn();
        showEmptyMsg();
    }
};

module.exports = {checkMsgCount};
