"use strict";

module.exports.save = (key, data) => {
    data = JSON.stringify(data);
    localStorage.setItem(key, data);
};
