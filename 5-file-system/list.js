// The FS module is code module that can be used to list and create new files and directories, 
// stream files, watch files, modify their permission etc.
// Since it is a core module, it is available out of the box and does not require npm to be installed.
const fs = require("fs");

// readdir is reading the contents of a directory.
// it lists files synchronously. Note: This is a blocking call as it synchronous.
// so js will stop everything else and wait for readdirSync to finish 
// before going ahead.
console.log("start synchronous reading..")
const files = fs.readdirSync("./assets");
console.log("complete");
console.log(files);


// for asynchronous readdir use the following:
console.log("start asynchronous read");
fs.readdir("./assets", (err, files)=> {
    if(err){
        throw err;
    }
    console.log("finish asynchronous read");
    console.log(files);
});


console.log("this will be printed before the read is complete as it asynchronous");
