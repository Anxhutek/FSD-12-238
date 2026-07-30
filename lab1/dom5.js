import {EventEmitter} from './event-emitter.js';
class DomClass extends EventEmitter {
    addEventListener(eventName, callback) {
        this.on(eventName, callback);
    }
    removeEventListener(eventName, callback) {
        this.off(eventName, callback);
    }

    dispatchEvent(eventName,eventData={}){
        const event = {
            type: eventName,
            timespam: new Date(),
            ...eventData,
        };
        this.emit(eventName,event);
    }

}

const button = new DomClass();
const handleClick = (event) => {
    console.log(`Button clicked at ${event.timespam}`);
};

button.addEventListener('click', handleClick);
button.dispatchEvent('click',{
    target:"submit8n",
});


button.addEventListener('click', handleClick);
button.dispatchEvent('click',{
    target:"reset8n",
});