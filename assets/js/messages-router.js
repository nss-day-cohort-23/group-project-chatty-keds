"use strict";

const adder = require("./add");
const deleter = require("./delete");
const setter = require("./set-local-storage");
const usersReq = require("./users.js");

let messages = [];
let users = [];

module.exports.routeFetch = (key, data) => {
    if (key === "messages") {
        messages = data;
        data.forEach(item => {
            adder.addMessage(item.body, item.timestamp, item.user);
        });
    } else if (key === "users") {
        users = data;
        data.forEach(item => {
            adder.saveUser(item.id, item.username);
        });
        usersReq.displayUsers(users);
    }
};

module.exports.new = (body, timestamp, user) => {
    let message = {body, timestamp, user};
    messages.push(message);
    setter.save("messages", messages);
    adder.addMessage(body, timestamp, user);
};

module.exports.deletes = num => {
    deleter.deleteMessage(num);
    messages.forEach((item) => {
        if (item.timestamp == num) {
            let idx = messages.indexOf(item);
            messages.splice(idx, 1);
        }
    });
    setter.save("messages", messages);
};
