"use strict";

const clearMsgs = document.getElementById("clearMsgs");
const emptyMsg = document.getElementById("empty-msg");

module.exports.disable = num => {
  if (num === 0){
    clearMsgs.classList.add("disabled");
    clearMsgs.disabled = true;
    emptyMsg.classList.remove("hidden");
  }
};

module.exports.enable = num => {
  if (num > 0){
    clearMsgs.classList.remove("disabled");
    clearMsgs.disabled = false;
    emptyMsg.classList.add("hidden");
  }
};

// module.exports.toggleEmptyMsg = num => {
//   if (num === 0){
    
//   }
//   if (num > 0){
   
//   }
// };
