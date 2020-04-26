// using writeable streams

const fs = require("fs");

// process.stdout is a writeable stream and hence has a write method
// which can be used to write data to the writeable stream.
// for writing to terminal, we use what we have used before -
process.stdout.write("Hello");
process.stdout.write(" world\n");

// We can use a writeable file stream in the exact same way
// Mention UTF-8 encoding if you're writing text. Otherwise it will be treated as a binary file.
const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");
const writeStream2 = fs.createWriteStream("./assets/myFile2.txt", "UTF-8");
const writeStream3 = fs.createWriteStream("./assets/myFile3.txt", "UTF-8");


const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

writeStream.write("hello");
writeStream.write(" world\n");

// readable streams are made to work with writable streams.

// The below block of code will read from terminal using process.stdin and 
// write the data to the file using fs.writeStream
process.stdin.on("data", (data) => {
    if (data.toString().trim()=="exit"){
        process.exit();
    }
    console.log(data.toString());
    writeStream.write(data);
});

//reading from a file and writing to another file
readStream.on("data", (data) => {
    writeStream2.write(data);
});

// Since readable streams are meant to work with writeable stream, 
// there are many ways you can combine them.
// Piping
process.stdin.pipe(writeStream3);
// we can replace process.stdin with readStream to read from a file and write to another


