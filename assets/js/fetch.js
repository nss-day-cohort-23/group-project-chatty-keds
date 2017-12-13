"use strict";

const adder = require("./add");

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
        adder.addMessage(message.body, message.timestamp, message.user);
    });
};

module.exports = {fetchMessages};
