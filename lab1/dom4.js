import {EventEmitter} from 'events';

const button = new EventEmitter();

form.on("submit", (uname, password) => {
    console.log(`Form submitted by ${uname} with password ${password}`);
});

form.emit("submit", "John", "password123");
