
import { EventEmitter } from 'events';
const emitter = new EventEmitter();
function eventHandler(data) {
  console.log(`Received event data: ${data}`);
}
emitter.on('myEvent', eventHandler);
emitter.emit('myEvent', 'Hello, world!');
emitter.off('myEvent', eventHandler);
emitter.emit('myEvent', 'This event will not be handled');


