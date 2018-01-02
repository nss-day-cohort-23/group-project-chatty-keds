"use strict";

module.exports.deleteMessage = (id, arr) => {
    const msgContainer = document.getElementById("message-container");
    const msgToRemove = document.getElementById(id);
    msgContainer.removeChild(msgToRemove);

    arr.forEach(item => {
        if (item.timestamp == id) {
            let idx = arr.indexOf(item);
            arr.splice(idx, 1);
        }
    });
    return arr;
};
