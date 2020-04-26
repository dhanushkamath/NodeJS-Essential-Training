// Write and append files

const fs = require("fs");

// if you use a backtick (`) instead of a single quote ('), it forms a 
// template string. A template string can be used to output variables dynamically
// in a string and also it reads spaces and new lines exactly how it is defined. 
const md = `
# This is a new file.

We can write text to a file with fs.writeFile

* fs.readdir
* fs.readFile
* fs.write

`;

console.log("-----Begin Synchronous write--------");

// This is synchronous write - blocking call
fs.writeFileSync("./assets/sync-write.md", md.trim());
console.log("file saved");
console.log("---------End synchronous write-------\n\n\n\n");


console.log("---------Begin Asynchronous write------")

fs.writeFile("./assets/async-write.md", md.trim(), (err)=>{
    if(err){
        throw err;
    }
    console.log("file saved");
    console.log("-----End Asynchronous write-------");
});

console.log("this will be executed before file is written since it is asynchronous.");