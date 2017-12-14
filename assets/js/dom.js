"use strict";

const domController = require("./dom");
const events = require("./events");

const focusTextarea = textarea => {
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
		domController.resetEditButtons(events.getSelectedUserId());
	}
};

const resetEditButtons = activeUserId => {
    let editButtons = [...document.getElementsByClassName("edit-button")];
    const events = require("./events");
    editButtons.forEach(button => {
        button.classList += " hidden";
        if (activeUserId == button.dataset.user) {
            button.classList.remove("hidden");
        }
    });
};

module.exports = {focusTextarea, unfocusTextarea, resetEditButtons};