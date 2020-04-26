// using fs to read a file

const fs = require("fs");

// Read files synchronously - blocking call.
const text = fs.readFileSync("./assets/Readme.md", "UTF-8");

console.log("--------Synchronous read begin------------")
console.log(text);
console.log("-------Synchronous read complete-----------");

console.log("------Asynchronous read begin-------")
fs.readFile("./assets/Readme.md", "UTF-8", (err,text) => {
    
    if(err){
        throw err;
    }
    
    console.log(text);
    console.log("=======Asynchronous Read COMPLETE==========");
})
console.log("----This line will be executed before reading completes as it is asynchronous------");

console.log("\n\n\n\n\n")

// You can use it for reading images too - but in BINARY.
// Note: for binary, we do not supply encoding argument.
fs.readFile("./assets/alex.jpg", (err,img) => {
    
    if(err){
        console.log(`Error: ${error}`);
        process.exit();
    }
    
    console.log(img);
    console.log("=======Asynchronous Read Binary COMPLETE==========");
})