"use strict";

const messenger = require("./messages");
const domController = require("./dom-output");

const addMessage = (string) => {
    let id = messenger.saveMessage(string);
    let msgElm = domController.createMsgElm(string, id);
    let container = document.getElementById(/** msg container **/);
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
        addMessage(message.body);
    });
};

module.exports = {addMessage, removeMessage, fetchMessages};