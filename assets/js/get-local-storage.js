"use strict";
const msgs = require("./messages-router");
// const settings = require("./settings-router");

const modFuncs = {
    messages: msgs.routeFetch,
    users: msgs.routeFetch,
    // themes: settings.testLog,
    // sizer: settings.testLog,
};

let itemsArr = [];

module.exports.fetch = key => {
    itemsArr = JSON.parse(localStorage.getItem(key));
    modFuncs[key](key, itemsArr);
};
