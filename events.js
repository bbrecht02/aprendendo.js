const EventEmitter = require("events");

class Users extends EventEmitter {
    userLogged(data) {
        setTimeout(() => {
            this.emit("User logged", data);
        }, 2000);
    }
}

const users = new Users();

users.on("User logged", data => {
    console.log(data);
});

users.userLogged({user: "User 1"});
users.userLogged({user: "User 2"});
users.userLogged({user: "User 3"});