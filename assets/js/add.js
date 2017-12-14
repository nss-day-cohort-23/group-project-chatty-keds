"use strict";

const timestamper = require("./timestamper");
const dateReader = require("./date-reader");
const checkEmpty = require("./check-empty");
const router = require("./messages-router");

const addMessage = (data) => {
    if (!timestamp) {
      timestamp = timestamper.stamper();
    }
    let msgElm = createMsgElm(data);
    let container = document.getElementById("message-container");
    container.appendChild(msgElm);
    checkEmpty.checkMsgCount();
};

const createMsgElm = (message) => {
    let id = message.timestamp;
    let text = message.body;
    let userId = message.user;
    let users = router.getUsers();
    let user = users.filter(chatter => chatter.id == userId);
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

module.exports = {addMessage};
