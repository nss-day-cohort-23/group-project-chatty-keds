"use strict";

const adder = require("./add");
const fetcher = require("./fetch");

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

const fetchUsers = filename => {
    let request = new XMLHttpRequest();
    request.open("GET", filename);
    request.addEventListener("load", parseUsers);
    request.send();
};

const parseUsers = (event) => {
    let data = JSON.parse(event.target.responseText);
    let users = data.users;
    users.forEach(user => {
        adder.saveUser(user.id, user.username);
    });
    displayUsers(users);
    fetchMessages("assets/json/messages.json");
};

const displayUsers = users => {
    let btnGroup = document.getElementById("users");
    users.forEach(user => {
        let label = document.createElement("label");
        label.classList = "btn btn-secondary";
        if (user.id == 1) {
            label.classList += " active";
        }
        let btn = document.createElement("input");
        btn.type = "radio";
        btn.name = "users";
        btn.id = user.id;
        
        label.appendChild(btn);
        label.innerHTML += user.username;

        btnGroup.appendChild(label);
    });
};

module.exports = {fetchMessages, fetchUsers};
