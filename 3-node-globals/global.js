// global represents the module that is available by default globally. 
// The global object contains many values and methods that can be used globally.
// As shown below, require, console, __dirname, __filename are all from the global module.


// require is used to import any external code - npm modules, 
// modules that are already shipped with nodejs and our own modules.
const path = require("path");

console.log("Hello world")
global.console.log("Hello World")

// parsing the filename from the full path
// Note that backtick is used not single quotation below
console.log(`The file name is ${path.basename(__filename)}`);

console.log(__dirname);
console.log(__filename);
