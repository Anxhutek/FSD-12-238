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
