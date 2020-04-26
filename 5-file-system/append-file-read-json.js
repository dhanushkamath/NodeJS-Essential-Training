// No directory is required for importing a json file
// we can import it directly using require.
const colorData = require("./assets/colors.json");

const fs = require("fs");

// accessing colorList segment in colorData json
colorData.colorList.forEach(c=> {
    // fs.append appends to existing file or 
    // creates new file if file doesn't exist
    fs.appendFile("./assets/colors.md",`${c.color}: ${c.hex}\n`, (err) => {
        if(err){
            throw err;
        }
    });
});