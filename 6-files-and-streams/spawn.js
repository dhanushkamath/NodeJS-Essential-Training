// SPAWN

// Exec is used to execute terminal commands. 
// Execute is designed to handle synchronous processes - the processes
// that run and close, maybe spit out some data etc. Execute is not meant to
// handle asynchronous processes - these can be long processes, processes that wait for input,
// or anything that remains open.
// The question app in chapter 4 asks questions and waits for an input. It is asynchronous.
// Spawn is used for such scenarios.

const cp = require("child_process");
const readline = require("readline");

// Remember RL requires an interface.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// in spawn, the first argument is the command and the second one is 
// an array that takes the other additional arguments for the shell command.
// In our case it will be the node app location. This command will execute our 
// node app in a separate process.
const questionApp = cp.spawn("node", ["../4-core-modules/questions.js"]);

// We can communicate with this process using stdin and stdout

// Since we know the answers,


// So basically whenever the app spits out data, we can handle it.
// we use readline to fetch data from our current process and then send it
// to our child process (questions.js app)
questionApp.stdout.on("data", (data) => {
    rl.question(`from the question app: ${data}`, (answer) => {
        // '\n' is added at the end to mimic an enter. Otherwise it would not read it.
        questionApp.stdin.write(answer.toString().trim()+'\n');
    });
})

// 'close()' is emitted when the childprocess has exited either when the program
// terminates or process.exit() is encountered.
questionApp.on("close", () => {
    console.log(`questionApp process exited`);
    console.log(`Exiting child process as well`);

})

process.stdin.read