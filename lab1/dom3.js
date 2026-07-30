import {EventEmitter} from 'events';

const button = new EventEmitter();

button.on('click', () => {
    console.log('button clicked by ${uname}');
});

button.emit('click', { uname: 'John' });
button.emit('click', { uname: 'Jane' });
button.emit('click', { uname: 'Alice' });
button.emit("click");
