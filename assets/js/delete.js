"use strict";

module.exports.deleteMessage = id => {
    const msgContainer = document.getElementById("message-container");
    const msgToRemove = document.getElementById(id);
    msgContainer.removeChild(msgToRemove);
};
