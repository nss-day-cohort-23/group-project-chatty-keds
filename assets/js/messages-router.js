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
            adder.addMessage(item.body, item.timestamp, item.user);
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
