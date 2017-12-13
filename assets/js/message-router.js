"use strict";

const messenger = require("./messages");
const domController = require("./dom-output");
const timestamper = require("./timestamper");

const addMessage = (string, timestamp) => {
    if (!timestamp) {
      timestamp = timestamper();
    }
    console.log(timestamp);
    messenger.saveMessage(string, timestamp);
    let msgElm = domController.createMsgElm(string, timestamp);
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

const parseMessages = event => {
    let data = JSON.parse(event.target.responseText);
    let messages = data.messages;
    messages.forEach(message => {
        addMessage(message.body, message.timestamp);
    });
};

module.exports = {addMessage, removeMessage, fetchMessages};
