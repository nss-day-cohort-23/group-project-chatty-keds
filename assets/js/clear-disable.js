"use strict";

const clearMsgs = document.getElementById("clearMsgs");

module.exports.disable = num => {
  if (num === 0){
    clearMsgs.classList.add("disabled");
    clearMsgs.disabled = true;
  }
};

module.exports.enable = num => {
  if (num > 0){
    clearMsgs.classList.remove("disabled");
    clearMsgs.disabled = false;
  }
};
