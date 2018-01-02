"use strict";

module.exports.deleteMessage = (id, arr) => {
    $(`#${id}`).remove();

    arr.forEach(item => {
        if (item.timestamp == id) {
            let idx = arr.indexOf(item);
            arr.splice(idx, 1);
        }
    });
    return arr;
};
