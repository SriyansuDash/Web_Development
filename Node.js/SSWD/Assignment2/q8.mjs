
import { EventEmitter } from 'events';


const emitter = new EventEmitter();


emitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

emitter.on('bye', () => {
  console.log('Goodbye!');
});

emitter.emit('greet', 'John');
emitter.emit('bye');


emitter.once('welcome', () => {
  console.log('Welcome to our application!');
});

emitter.emit('welcome');
emitter.emit('welcome');
const handler = () => {
  console.log('This event handler will be removed.');
};
emitter.on('remove', handler);
emitter.emit('remove'); 
emitter.off('remove', handler);
emitter.emit('remove'); 