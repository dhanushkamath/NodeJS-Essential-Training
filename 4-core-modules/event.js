// EventEmitter
// EventEmitter is nodejs's implementation of pub-sub design pattern.
// It gives us the mechanism to create custom events and attaching listeners and handlers for those events.
// It is a core module. Hence path is not required.
// It is asynchronous.
const events = require("events");

// Create an instance of the event emitter
const emitter = new events.EventEmitter();

// handling the two custom events given below
emitter.on("customEvent", (message,user)=> {
    console.log(`${user}: ${message}`);
});

// we use emit() function to raise custom event
// "customEvent" is the name of the event, the remaining arguments are the data that is
// passed to the event handler.
emitter.emit("customEvent", "Hello World", "Computer");
emitter.emit("customEvent", "thats pretty cool", "dhanush");

// To show asynchronous nature, let's raise the event when data is input in terminal
 process.stdin.on("data", (data) => {
    const input = data.toString().trim();
    if(input === "exit"){
        emitter.emit("customEvent", "Goodbye!", "process");
        process.exit();
    }
    emitter.emit("customEvent", input, "terminal");
 });

