"use strict";

const events = require("./events");
const domController = require("./dom");

const editMessage = id => {
    let msgWrapper = document.getElementById(id);
    let msgBox = [...msgWrapper.getElementsByClassName("message-box")][0];
    let msg = msgBox.innerText;
    msgBox.remove();

    let textarea = document.createElement("textarea");
    textarea.id = id;
    textarea.value = msg;
    textarea.classList = "edit-msg";
    msgWrapper.appendChild(textarea);
    textarea.focus();
    domController.focusTextarea(textarea);
};

module.exports = {editMessage};