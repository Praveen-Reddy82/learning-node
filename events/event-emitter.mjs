import {EventEmitter} from "node:events";

let emitter= new EventEmitter();
emitter.on("message", function(message){
console.log(message);
});
emitter.emit("message", "HEllo friend");
console.log(emitter.listeners("message"));
