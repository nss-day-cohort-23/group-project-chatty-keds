"use strict";

const add = require("./add");
// const delete = require('./delete');


const clickListen = () => {
  document.body.addEventListener("click", event => {
    // console.log(event);
    // if (event.target.parent === "msgWrapper") {
    //   router.removeMessage(event.target.parent.id);
    // }
    // if (event.target.id === "clearMsgs") {
    //   [...document.getElementsByClassName("message-wrapper")].forEach(item => {
    //     router.removeMessage(item.id);
    //   });
    // }
  });
};

document.body.addEventListener("change", event => {
  // if (event.target.id === "sizeSelect") {
  //   event.target.value;
  // }
  // if (event.target.id === "themeSelect") {
  //   event.target.value;
  // }
});
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
  clickListen();
  enterListen();
};
