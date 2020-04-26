// using readline and event handlers for making a question-answering app.

const readline = require("readline");

// Adding a custom event
const { EventEmitter } = require("events");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// export collectAnswers function.
// add a default dummy function for done so that the code runs without callback function.
module.exports = (questions, done = f => f) => {
    const answers = [];
    // array destructuring
    const [firstQuestion] = questions;

    const emitter = new EventEmitter();
    
    questionAnswered = (answer) => {
        // raise custom event
        emitter.emit("answer", answer);
        answers.push(answer);
        if (answers.length < questions.length){
            rl.question(questions[answers.length],questionAnswered);
        } else{
            //raise a custom event
            emitter.emit("complete", answers);
            // passing answers to the callback function.
            done(answers);
        }
    };

    rl.question(firstQuestion, questionAnswered);
    return emitter;
};
