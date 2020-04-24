// Using timers in js
// You can work asynchronously with NodeJs using timing functions.

// in milliseconds
const waitTime = 5000;
const waitInterval = 500;
// For any variable whose value can get changed, use let.
let currentTime = 0;

console.log(`setting a ${waitTime/1000} second delay`);

// Timeout function.
const timerFinished = () => {
    // stop the interval
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("done");
}

// Interval function.
const incTime = () => {
    currentTime += waitInterval;
    // console.log(`Waiting for an interval of ${waitInterval/1000} seconds`);
    
    const p = Math.floor((currentTime/waitTime)*100);
    // Clear the last line, move the cursor back to beginning of the line
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting... ${p}%`)
    
    //console.log(`Passed time: ${currentTime/1000} seconds`)
}

// assign a variable to the interval so that we can use it to 
// clear it later
const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);
