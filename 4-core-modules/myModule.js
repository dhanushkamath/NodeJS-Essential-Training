// Creating our own module.
// In Nodejs, every js file is its own module.
// Any js file can be imported using require.

let count=0;

// Creating small functions to export
const inc = () => ++count;
const dec = () => --count;

// We use a getter to fetch counts value in another js instead of return the variable.
const getCount = () => count;

// This is imported in app.js
module.exports = {
    inc,
    dec,
    getCount
}