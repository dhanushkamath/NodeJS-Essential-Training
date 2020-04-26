// Renaming and removing directories.
// In this, we first rename a directory, delete its contents and remove the directory.
const fs = require("fs");

// renaming directory with synchronous function.
fs.renameSync("./storage-files", "./storage");
// asynchronous versions can also be used

// synchronously remove all files in the directory.
// Explanation given below this block of code in NOTE.
fs.readdirSync("./storage").forEach(fileName => {
    fs.unlinkSync(`./storage/${fileName}`);
})

// removing directories asynchronously
// NOTE: if the directory contains files or other directories,
// it will throw an error. So first remove the contents of the directory.
fs.rmdir("./storage", (err) => {
    if(err) {
        throw err;
    }

    console.log("storage directory removed")
})