import {EventEmitter} from 'events';

const button =new EventEmitter();

button.on('click', () => {
    console.log('Button clicked!');
});

button.on('click', () => {
    console.log('Another click handler!');
});

button.emit('click');
