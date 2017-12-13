"use strict";

const fetcher = require("./fetch");
const listeners = require('./events');

const init = () => {
    fetcher.fetchUsers("assets/json/users.json");
    listeners.addListeners();
};

module.exports = {init};
