// The modules that are available out of the box with nodejs and
// are not required to be installed with npm are called CORE MODULES.

// path is a core module. No npm is required
const path = require('path');

// has a lot of helpful functions
const util = require('util');

const v8 = require("v8");

// if you only want to extract a particular entity from a module,
// you can destructure them as shown below:

// const { log } = require("util");
// const { getHeadStatistics } = require("v8");

// we have a folder www with files inside and uploads inside files.
// to create an absolute path to it:
const dirUploads = path.join(__dirname,"www","files","uploads");

console.log(dirUploads);
// util.log adds a timestamp when outputting
util.log(path.basename(__filename));
util.log(" ^ the name of the current file");

// gives memory usage and memory stats
util.log(v8.getHeapStatistics());