// readLine is an interface around readable and writeable streams.
// it allows us to easily to write code to prompt the user and collect inputs.
// it is used for building apps with asking questions to users in terminal.
// It is a core module. So no extra module needs to be installed with npm.
// No npm is required for code modules.
const readline = require("readline");

// We are required to create an interface first.
// Inside we supply an object to specify what stream to use for input
// and output. Here are using stdin and stdout since we are using terminal for interaction.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// the question function in the interface is used for asking questions.
// a callback function is invoked when the answer has been provided.
rl.question("How do you like Node? ", answer => {
    console.log(`Your answer is ${answer}`);
})