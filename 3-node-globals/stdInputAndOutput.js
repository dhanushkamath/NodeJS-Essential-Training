// The process object also contains std input and std output.
// These 2 objects are used to communicate with the process while its running

// process.stdout is a writeable stream. It has a write method to send data
// out of the program
process.stdout.write("Hello ");
process.stdout.write("World \n\n\n");

//console.log is also std out but it automatically adds new line whereas
// stdout.write doesn't.

const questions = [
    "What is your name?", 
    "What are you upto?",
    "How are you doing?"
];

// i=0 is the default argument
const ask = (i=0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
};

ask();

// Fetching data asynchronously.
// on listens for events and here we are looking for a 'data' event
// the 'data' event is triggered when we type something and press enter
// the argument sent to callback function inputData is a buffer
// it has to be converted to string. Trimming is used to remove leading
// and trailing spaces.
// The reason for making this ASYNCHRONOUS is that the program remains running
// now and listens for input data. It doesn't exit even after providing input data.
// The event handler stops listening only when process.exit() is called or when the
// program is closed using ctrl+c.
const answers = [];
process.stdin.on('data', inputData => {
    process.stdout.write(`\n\n ${inputData.toString().trim()}`);
    answers.push(inputData.toString().trim());

    if (answers.length < questions.length){
        ask(answers.length);
    }
    else{
        process.exit();
    }
})

// handling the exit event triggered above
process.on('exit', () => {
    // array destructuring. Same as unpacking in Python.
    const [name, activity, status] = answers;
    console.log(`
    
    Thank you for your answers.
    Happy to know that you're ${status}, ${name}. Now go ${activity}!
    
    `)
})