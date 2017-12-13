"use strict";

const setStylesheet = stylesheet => {
    let head = document.head;
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = stylesheet;
    head.appendChild(link);
};

module.exports = {setStylesheet};