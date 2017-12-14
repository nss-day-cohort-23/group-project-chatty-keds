"use strict";
const listeners = require('./events');
const setLocalStorage = require("./set-local-storage");
const getLocalStorage = require("./get-local-storage");

const testUser = [{
        "id": 1,
        "username": "Luke"
    },
    {
        "id": 2,
        "username": "Leia"
    }, {
        "id": 3,
        "username": "Han"
    }
];
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
