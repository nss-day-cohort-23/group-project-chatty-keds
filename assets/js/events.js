"use strict";

const add = require("./add");
const deleter = require('./delete');
// const sizer = require("./text-sizer");

const clickListen = () => {
  document.body.addEventListener("click", event => {
    if (event.target.parentNode.className === "message-wrapper") {
      deleter.deleteMessage(event.target.parentNode.id);
    }
    if (event.target.id === "clearMsgs") {
      [...document.getElementsByClassName("message-wrapper")].forEach(item => {
        deleter.deleteMessage(item.id);
      });
    }
  });
};

const changeListen = () => {
  document.body.addEventListener("change", event => {
    if (event.target.parentNode.id === "text-sizer") {
      console.log("Hey the text-sizer checkbox works");
    }
    if (event.target.parentNode.id === "theme-changer") {
      console.log("Hey there the theme-changer checkbox works");
    }
  });
};

const enterListen = () => {
  document.body.addEventListener("keypress", event => {
    const inputId = event.target.id;
    if (event.key === "Enter" && inputId === "msgInput"){
      const inputElm = document.getElementById(inputId);
      add.addMessage(event.target.value, null);
      inputElm.value = '';
    }
  });
};

module.exports.addListeners = () => {
  changeListen();
  clickListen();
  enterListen();
};
