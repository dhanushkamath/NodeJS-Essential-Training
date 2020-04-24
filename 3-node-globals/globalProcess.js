// Process object is also available globally
// Contains info about the current process and tools to interact
// with current process.

//Process can be used to fetch environment info, env variables, 
// command-line variables, communicate with terminal, 
// exit the process etc.

// We can also use it to collect command-line arguments as well.


// Process ID
console.log(process.pid);
// Current version of NodeJS used to run the process
console.log(process.versions.node);

// To get command-line arguments without flags: 
// Outputs an array that contains everything
// we typed to run the process.
// Pass "dhanush" "kamath" at the end of node command in terminal.
// execute - node globalProcess dhanush kamath
console.log(process.argv);

// to get those command line arguments selectively, we need to ignore
// the first two values - which are node command and filename.

const [, , firstName, lastName] = process.argv;

// Note that backtick is used and not single quotation below
// this is called Template String.
console.log(`Without flags : ${firstName} ${lastName}`);

// Providing flags with CL arguments.
// we need to write a custom function to fetch the value of the flag
// which is present right after each flag.
const grab = flag => {
    // js arrays have indexOf method to search for the value 
    let indexAfterFlag = process.argv.indexOf(flag)+1;
    return process.argv[indexAfterFlag];
}

const greeting = grab("--greeting");
const user = grab("--user");
// execute - node globalProcess --greeting "Hello Hi" --user "Dhanush"
console.log(`With flags : ${greeting} ${user}`);