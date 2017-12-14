"use strict";

const msgRouter = require("./messages-router");
const time = require("./timestamper");
const sizer = require("./text-sizer");
const styler = require("./themes");
const checkEmpty = require("./check-empty");
const users = require("./users");

const clickListen = () => {
    document.body.addEventListener("click", event => {
        const deleteBtnCheck = event.target.className.search(/delete-button/);
        if (deleteBtnCheck > -1) {
            msgRouter.deletes(event.target.parentNode.id);
        }
        if (event.target.id === "clearMsgs") {
            [...document.getElementsByClassName("message-wrapper")].forEach(item => {
                msgRouter.deletes(item.id);
            });
        }
		checkEmpty.checkMsgCount();
    });
};

const changeListen = () => {
    document.body.addEventListener("change", event => {
        if (event.target.parentNode.id === "text-sizer") {
            sizer.toggleSize();
        }
        if (event.target.parentNode.id === "theme-changer") {
            if (event.target.checked) {
                styler.setStylesheet("assets/css/dark.css");
            } else {
                styler.setStylesheet("assets/css/light.css");
            }
        }
    });
};

const enterListen = () => {
    document.body.addEventListener("keypress", event => {
        const inputId = event.target.id;
        let check = event.key === "Enter" && inputId === "msgInput" && event.target.value.trim() !== "";
        if (check) {
            const inputElm = document.getElementById(inputId);
            msgRouter.new(event.target.value, time.stamper(), users.getUserId());
            inputElm.value = '';
        }
    });
};

module.exports.addListeners = () => {
    changeListen();
    clickListen();
    enterListen();
	checkEmpty.checkMsgCount();
};
