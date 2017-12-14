"use strict";
const listeners = require('./events');
const setLocalStorage = require("./set-local-storage");
const getLocalStorage = require("./get-local-storage");
const testMsg = [
    {"body": "Nunc nisi adipiscing pellentesque lacus? Platea vel lundium facilisis",
    "timestamp": 1513108861000,
    "user": 1}
];

const testUser = [{
    "id": 1,
    "username": "luke"
}];
const init = () => {
    setLocalStorage.save("users", testUser);

    getLocalStorage.fetch("users");
    getLocalStorage.fetch("themes");
    getLocalStorage.fetch("sizer");
    getLocalStorage.fetch("messages");
    listeners.addListeners();
};

module.exports = {
    init
};
