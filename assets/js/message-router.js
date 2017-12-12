"use strict";

const messenger = require("./messages");
const domController = require("./dom-output");

const addMessage = (string, timestamp) => {
    let id = messenger.saveMessage(string, timestamp);
    console.log(id);
    let msgElm = domController.createMsgElm(string, id);
    let container = document.getElementById("message-container");
    container.appendChild(msgElm);
};

const removeMessage = id => {
    if (messenger.deleteMessage(id)) {
        domController.removeMsgElm(id);
    }
};

const fetchMessages = filename => {
    let request = new XMLHttpRequest();
    request.open("GET", filename);
    request.addEventListener("load", parseMessages);
    request.send();
};

const parseMessages = () => {
    let data = JSON.parse(event.target.responseText);
    let messages = data.messages;
    messages.forEach(message => {
        let timestamp = Date.now();
        if (message.timestamp) {
            timestamp = message.timestamp;
        }
        addMessage(message.body, timestamp);
    });
};

module.exports = {addMessage, removeMessage, fetchMessages};