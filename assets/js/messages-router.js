"use strict";

const adder = require("./add");
const deleter = require("./delete");
const setter = require("./set-local-storage");
const usersReq = require("./users.js");

let messages = [];
let users = [];

module.exports.getMsgs = () => {
    return messages;
};

module.exports.getUsers = () => {
    return users;
};

module.exports.routeFetch = (key, data) => {
    if (key === "messages" && data !== null) {
        messages = data;
        data.forEach(item => {
            let obj = {body: item.body, timestamp: item.timestamp, user: item.user};
            adder.addMessage(obj);
        });
    } else if (key === "users") {
        users = data;
        usersReq.displayUsers(users);
    }
};

module.exports.new = (body, timestamp, user) => {
    let message = {body, timestamp, user};
    messages.push(message);
    setter.save("messages", messages);
    adder.addMessage(message);
};

module.exports.deletes = num => {
    messages = deleter.deleteMessage(num, messages);
    setter.save("messages", messages);
};
