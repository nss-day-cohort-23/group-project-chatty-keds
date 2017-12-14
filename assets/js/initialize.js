"use strict";
const listeners = require('./events');
const getLocalStorage = require("./get-local-storage");

const init = () => {
    getLocalStorage.fetch("users");
    getLocalStorage.fetch("themes");
    getLocalStorage.fetch("sizer");
    getLocalStorage.fetch("messages");
    listeners.addListeners();
};

module.exports = {
    init
};
