"use strict";

const fetcher = require("./fetch");

const init = () => {
    fetcher.fetchMessages("assets/json/messages.json");
    // TODO activate events
};

module.exports = {init};