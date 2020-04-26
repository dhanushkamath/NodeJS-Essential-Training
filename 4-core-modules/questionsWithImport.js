const collectAnswers = require("./lib/collectAnswers");

questions = [
    "What's your name?",
    "Where are you from?",
    "What're you planning to do?"
];

// collectAnswers returns an evenEmitter that is stored in answerEvents
const answerEvents = collectAnswers(questions, (answers) => {
    console.log(answers);
    process.exit();
});

answerEvents.on("answer", answer => console.log(`question answered: ${answer}`));

answerEvents.on("complete", (answers) => {
    console.log(`Thank you for the answers: ${answers}`);
});