"use strict";


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
	}
};

const resetEditButtons = activeUserId => {
    let editButtons = [...document.getElementsByClassName("edit-button")];
    const events = require("./events");
    console.log(events.getSelectedUserId());
    editButtons.forEach(button => {
        if (events.getSelectedUserId() == button.parentNode.dataset.user) {
            button.classList.remove("hidden");
        }
    });
};

module.exports = {focusTextarea, unfocusTextarea, resetEditButtons};