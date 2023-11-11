      //DUPLEXSTREAM

const {PassThrough} = require("stream");
const {createReadStream, createWriteStream} = require("fs");
const myReadStream = createReadStream("./test.txt")
const myWriteStream = createWriteStream("./adam.txt")

const report = new PassThrough();

let total = 0;
report.on("data", (chunk) => {
          total += chunk.length;
          console.log("bytes: ", total);
});

myReadStream.pipe(report).pipe(myWriteStream);