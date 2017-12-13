"use strict";

const fetcher = require("./fetch");
const listeners = require('./events');

const init = () => {
    fetcher.fetchMessages("assets/json/messages.json");
    listeners.addListeners();
};

module.exports = {init};
