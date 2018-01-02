"use strict";

const router = require('./messages-router');


const disableClearBtn = () => {
    $("#clearMsgs").addClass("disabled");
    $("#clearMsgs").attr("disabled", true);
};
const enableClearBtn = () => {
    $("#clearMsgs").removeClass("disabled");
    $("#clearMsgs").attr("disabled", false);
};

const showEmptyMsg = () => {
    $("#empty-msg").removeClass("hidden");
};
const hideEmptyMsg = () => {
    $("#empty-msg").addClass("hidden");
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
