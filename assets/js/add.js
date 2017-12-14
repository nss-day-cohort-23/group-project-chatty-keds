"use strict";

let Chatty = [];
let chatters = [];
const timestamper = require("./timestamper");
const dateReader = require("./date-reader");
const checkEmpty = require("./check-empty");
const deleter = require("./delete");

const addMessage = (string, timestamp, user) => {
    if (!timestamp) {
      timestamp = timestamper.stamper();
    }
    let message = saveMessage(string, timestamp, user);
    let msgElm = createMsgElm(message);
    let container = document.getElementById("message-container");
    container.appendChild(msgElm);
    checkEmpty.checkMsgCount();
};

const createMsgElm = (message) => {
    let id = message.timestamp;
    let text = message.body;
    let userId = message.user;
    let user = chatters.filter(chatter => chatter.id == userId);
    let username = [...user][0].username;

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

    const msgMeta = document.createElement("div");
    msgMeta.classList = "meta";

    const msgUser = document.createElement("span");
    msgUser.innerText = username;
    msgUser.classList = "user";
    msgMeta.appendChild(msgUser);

    const msgTimestamp = document.createElement("span");
    let readableTime = `${dateReader.getReadableTime(id)}`;
    msgTimestamp.innerText = readableTime;
    msgTimestamp.classList = "timestamp";
    msgMeta.appendChild(msgTimestamp);

    msgWrapper.appendChild(msgDeleteBtn);
    msgWrapper.appendChild(msgMeta);
    msgWrapper.appendChild(msgContent);

    return msgWrapper;
};


const saveMessage = (body, timestamp, user) => {
    let message = {body, timestamp, user};
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
        Chatty.splice(targetIndex, 1);
        checkEmpty.checkMsgCount();
        return true;
    } else {
        return false;
    }
};

const saveUser = (id, username) => {
    let user = {id, username};
    chatters.push(user);
};

const getUsers = () => {
    return chatters;
};

const trimMessages = () => {
    if (Chatty.length > 20) {
        console.log("trimming messages");
        for (var i=0; i<Chatty.length-20; i++) {
            console.log(i, Chatty[i].timestamp);
            deleter.removeMsgElm(Chatty[i].timestamp);
        }
    }
};

module.exports = {addMessage, deleteMessage, saveUser, getUsers, getMessages, trimMessages};
