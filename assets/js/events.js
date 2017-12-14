"use strict";

const adder = require("./add");
const deleter = require('./delete');
const sizer = require("./text-sizer");
const styler = require("./themes");
const editer = require("./edit");

const clickListen = () => {
	document.body.addEventListener("click", event => {
		const btn = event.target;
		let classes = btn.classList.value;
		if (btn.id == "clearMsgs") {
			[...document.getElementsByClassName("message-wrapper")].forEach(item => {
				deleter.deleteMessage(item.id);
			});
		} else if (classes.search(/-button/gi) != -1) {
			if (classes.search(/delete/gi) != -1) {
				deleter.deleteMessage(btn.parentNode.id);
			} else if (classes.search(/edit/gi) != -1) {
				editer.editMessage(btn.parentNode.id);
			}
		}
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
			adder.addMessage(event.target.value, null, getSelectedUserId());
			inputElm.value = '';
		}
	});
};

module.exports.focusTextarea = textarea => {
	textarea.style.height = `${textarea.scrollHeight+2}px`;
	textarea.addEventListener("keypress", unfocusTextarea);
	textarea.addEventListener("blur", unfocusTextarea);
};

const unfocusTextarea = event => {
	let textarea = event.target;
	let msg = document.createElement("span");
	let parent = textarea.parentNode;
	if (event.type == "keypress" && event.key == "Enter" || event.type == "blur") {
		msg.classList = "message-box";
		msg.innerText = textarea.value;
		textarea.removeEventListener("keypress", unfocusTextarea);
		textarea.removeEventListener("blur", unfocusTextarea);
		textarea.remove();
		parent.appendChild(msg);
	}
};

const getSelectedUserId = () => {
	let users = document.getElementById("users");
	let activeUser = [...users.getElementsByClassName("active")][0];
	let input = activeUser.childNodes[0];
	let activeUserId = input.id;
	return activeUserId;
};

module.exports.addListeners = () => {
	changeListen();
	clickListen();
	enterListen();
};
