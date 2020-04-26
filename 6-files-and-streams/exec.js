// NodeJs has a child process module that can be used to execute 
// external processes in your environment. 
// In other words, your nodejs application can run and communicate with
// other apps within the hosted environment.

const cp = require("child_process");

// Synchronous commands - they run once, spit out some data 
// and the process ends.
// exec is for synchronous commands. You can use it to execute shell commands in Unix based OS
// and DOS commands in windows.
// the below command opens linkedin in your browser. It will work on terminal as well.
// cp.exec("open http://www.linkedin.com/learning");

// the below command opens a new terminal instance at the current directory.
// the dot is used to indicate the current directory.
// cp.exec("open -a Terminal .")

// for any commands that return data, use callback function.
// stderr is the error returned from the shell.
// err is nodejs error.
// cp.exec("ls", (err, data, stderr) => {
//     if (err) {
//         console.log(err);
//         console.log("==========")
//         console.log(stderr);
//     }
//     console.log(data);
// })

// give an erroneous command
// cp.exec("lst", (err, data, stderr) => {
//     if (err) {
//         console.log(err);
//         console.log("======================")
//         console.log(stderr);
//     }
//     console.log(data);
// })

// You can also use exec to run nodejs commands like run another nodejs app.
cp.exec("node readStream", (err, data, stderr) => {
    console.log(data);
});