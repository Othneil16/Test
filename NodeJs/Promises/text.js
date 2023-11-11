 //readStream
 // import the file system module
 const fs = require("fs")

 //read a file
 const myReadStream = fs.createReadStream("./test2.txt", "utf8");

  //read the file in chunks
myReadStream.on("data", (chunk) => {
    console.log(`OurChunk: ${chunk}`);
});

//end the read stream operation
myReadStream.on("end", () => {
    console.log("End of our chunk");
});


