// rename and moving files using fs module
// rename function can be used for both - renaming and moving.
const fs = require("fs");

// renaming using synchronous rename function - blocking call
fs.renameSync("./assets/colors.json", "./assets/colors.json");

// moving using synchronous rename function - blocking call
fs.renameSync("./assets/colors.md", "./colors.md");

// Remember - the same can be done with synchronous functions and callbacks as well.

// To remove a file you can use fs.unlink
// using a timeout for no apparent reason -

setTimeout(() => {
    fs.unlink("./assets/hi.txt", () => {
        console.log("hi.txt deleted.");
    })
},4000);