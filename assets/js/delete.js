"use strict";

const adder = require("./add");

const deleteMessage = id => {
    // removes message from DOM
    removeMsgElm(id);
    // removes message from array in add.js
    adder.deleteMessage(id);
};

const removeMsgElm = id => {
    const msgContainer = document.getElementById("message-container");
    const msgToRemove = document.getElementById(id);
    console.log(msgToRemove);
    document.remove(msgToRemove);
};

module.exports = {deleteMessage, removeMsgElm};