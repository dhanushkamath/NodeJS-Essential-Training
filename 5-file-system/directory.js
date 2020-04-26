const fs = require("fs");

// check if the directory exists.
if (fs.existsSync("storage-files")){
    console.log("Directory exists!")
} else {
    // Asynchronous mkdir. Synchronous also exists - mkdirSync
    fs.mkdir("storage-files", (err) => {
        if(err){
            // if the directory exists, it will throw an error.
            // try creating the directory and 
            // removing the if statement above
            throw err;    
        }

        console.log("directory created");
    });
}

