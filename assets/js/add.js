"use strict";

let Chatty = [];
const timestamper = require("./timestamper");
const dateReader = require("./date-reader");

const addMessage = (string, timestamp) => {
    if (!timestamp) {
      timestamp = timestamper();
    }
    // add message to array
    let message = saveMessage(string, timestamp);
    // get DOM element to add
    let msgElm = createMsgElm(message);
    let container = document.getElementById("message-container");
    // add message to DOM
    container.appendChild(msgElm);
};

const createMsgElm = (message) => {
    let id = message.timestamp;
    let text = message.body;
    const msgWrapper = document.createElement("div");
    msgWrapper.id = `${id}`;
    msgWrapper.className = "message-wrapper";
  
    const msgContent = document.createElement("span");
    msgContent.className = "message-box";
  
    const msgContentTextNode = document.createTextNode(text);
    msgContent.appendChild(msgContentTextNode);
  
    const msgDeleteBtn = document.createElement("button");
    msgDeleteBtn.className = "delete-button btn btn-outline-danger btn-sm ml-3";
    msgDeleteBtn.innerText = "Delete";

    const msgTimestamp = document.createElement("div");
    msgTimestamp.classList = "text-muted timestamp";
    let readableTime = `${dateReader.getReadableTime(id)}`;
    msgTimestamp.innerText = readableTime;
    
    msgWrapper.appendChild(msgDeleteBtn);
    msgWrapper.appendChild(msgTimestamp);
    msgWrapper.appendChild(msgContent);
  
    return msgWrapper;
};


const saveMessage = (content, timestamp) => {
    let message = {
        "body": content,
        "timestamp": timestamp,
    };
    Chatty.push(message);
    return message;
};

const getMessages = () => {
    return Chatty;
};

const deleteMessage = id => {
    // return all messages with the above id
    let matchingMessages = Chatty.filter(message => message.timestamp == id);
    if (matchingMessages.length > 0) {
        let targetMessage = [...matchingMessages][0];
        let targetIndex = Chatty.indexOf(targetMessage);
        Chatty = Chatty.splice(targetIndex, 1);
        return true;
    } else {
        return false;
    }
};

module.exports = {addMessage, deleteMessage};