"use strict";

let messages = [];

module.exports.saveMessage = (content, timestamp) => {
    let message = {
        "body": content,
        "timestamp": timestamp,
    };
    messages.push(message);
    return timestamp;
};

module.exports.deleteMessage = (timestamp) => {
    // return all messages with the above timestamp
    let matchingMessages = messages.filter(message => message.timestamp == timestamp);
    if (matchingMessages.length > 0) {
        let targetMessage = [...matchingMessages][0];
        let targetIndex = messages.indexOf(targetMessage);
        messages = messages.splice(targetIndex, 1);
        return true;
    } else {
        return false;
    }
};

module.exports.getMessages = () => {
    return messages;
};