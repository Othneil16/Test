    //WRITEABLESTREAM
 
 //writeStream :and it basically writng to a file
 // import the file system module
 const {createReadStream, createWriteStream} = require("fs")

 //read && writing a file
 const myReadStream = createReadStream("./test.txt", "utf8");
 const myWriteStream = createWriteStream("./test.txt", "utf8");

  //read && writing the file in chunks
myReadStream.on("data", (chunk) => {
    myWriteStream.write(chunk);
});

//end the read stream operation && ending the writeStream operation
myReadStream.on("end", () => {
   myWriteStream.end()
});
myWriteStream.on("close", () => {
    process.stdout._write('file copied \n')
})

