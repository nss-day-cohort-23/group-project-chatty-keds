"use strict";

const createMsgElm = (text, id) => {
  const msgWrapper = document.createElement("div");
  msgWrapper.id = `${id}`;
  msgWrapper.className = "message-wrapper";

  const msgContent = document.createElement("span");
  msgContent.className = "message-box";

  const msgContentTextNode = document.createTextNode(text);
  msgContent.appendChild(msgContentTextNode);

  const msgDeleteBtn = document.createElement("button");
  msgDeleteBtn.className = "delete-button";
  msgDeleteBtn.innerText = "Delete";

  msgWrapper.appendChild(msgContent);
  msgWrapper.appendChild(msgDeleteBtn);

  return msgWrapper;
};

const removeMsgElm = id => {
  const msgContainer = document.getElementById("message-container");
  const msgToRemove = document.getElementById(id);
  msgContainer.removeChild(msgToRemove);
};

module.exports = {createMsgElm, removeMsgElm};
