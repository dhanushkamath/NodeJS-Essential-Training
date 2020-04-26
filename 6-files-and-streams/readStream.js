// Stream interface provides us with a technique to read and write data
// It can be used to read and write data to files, terminal, 
// to communicate with the internet, to communicate with processes etc.

// As a NodeJS developer, you will come across streams very frequently.

// process.stdin is a readable stream for reading data from the terminal
// by listening for 'data' events.
// fs module contains a readable stream for reading data from files.
const fs = require("fs");

// create a readable stream for reading files.
// for reading as text, pass "UTF-8" encoding as argument
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

// Stream allows us to read the file bit by bit or chunk by chunk instead of
// reading the whole file all at once. The chunks can be read by 'data' events.
// Reading files in streams causes nodejs app to consume less memory as compared to
// reading everything all at once as we are reading the file bit by bit and chunk by chunk.
// It also gives more control as they raise events.
// Each chunk of data read will raise a 'data' event.
let fileTxt = "";

readStream.on("data", data => {
    console.log(`I read ${data.length - 1} characters of text in this chunk`);
    // append each chunk 
    fileTxt += data;
});


// once is used for responding to the first event.
// So here we are only fetching the first chunk.
readStream.once("data", data => {
    console.log(data);
})

// Streams also raise an "end" event when the readStream has completed.
readStream.on("end", () => {
    console.log(`finished reading file. Total length: ${fileTxt.length-1} chars`)

})