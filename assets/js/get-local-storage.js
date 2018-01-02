"use strict";
const msgs = require("./messages-router");
const settings = require("./settings-router");

const modFuncs = {
    messages: msgs.routeFetch,
    users: msgs.routeFetch,
    themes: settings.testLog,
    sizer: settings.testLog,
};

let itemsArr = [];

module.exports.fetch = key => {
    let unparsed = localStorage.getItem(key);
    if (unparsed && unparsed !== "undefined") {
      itemsArr = JSON.parse(unparsed);
      modFuncs[key](key, itemsArr);
    }
};
