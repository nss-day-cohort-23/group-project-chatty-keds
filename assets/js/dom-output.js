"use strict";

const createMsgElm = (text, id) => {
  const msgWrapper = document.createElement("div");
  msgWrapper.id = `m${id}`;
  msgWrapper.className = "message-wrapper";

  const msgContent = document.createElement("span");
  msgContent.className = "message-box";

  const msgContentTextNode = document.createTextNode(text);
  msgContent.appendChild(msgContentTextNode);

  const msgDeleteBtn = document.createElement("button");
  msgDeleteBtn.className = "delete-button";

  msgWrapper.appendChild(msgContent);
  msgWrapper.appendChild(msgDeleteBtn);

  return msgWrapper;
};

const removeMsgElm = id => {
  const msgContainer = document.getElementById("messageContainer");// messageContainer ID will change with hard-coded index.html
  msgContainer.removeChild(id);
};

module.exports = {createMsgElm, removeMsgElm};
