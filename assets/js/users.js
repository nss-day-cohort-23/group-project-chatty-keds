'use strict';

module.exports.displayUsers = users => {
    let btnGroup = document.getElementById("users");
    users.forEach(user => {
        let label = document.createElement("label");
        label.classList = "btn btn-secondary";
        if (user.id == 1) {
            label.classList += " active";
        }
        let btn = document.createElement("input");
        btn.type = "radio";
        btn.name = "users";
        btn.id = user.id;
        
        label.appendChild(btn);
        label.innerHTML += user.username;

        btnGroup.appendChild(label);
    });
};

