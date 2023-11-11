// import the module
const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 3003
const host="localhost"

// create a server
const server = http.createServer((req, res) => {
  // get the path specified from the request url
  const filePath = path.join(__dirname, "statics", req.url);
  fs.exists(filePath, (fileExist) => {
    if (fileExist) {
      // read the file
      fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Server error");
        } else {
          // pass the content of the file here
          const contentType = getContentType(filePath);
          res.writeHead(200, { "Content-Type": contentType });
          res.end(data);
        }
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("File does not exist.");
    }
  });
});

// create a dynamic function for tracking file extensions using the switch
const getContentType = (filePath) => {
  // get the extension name
  const extensionName = path.extname(filePath);
  // switch the extension names
  switch (extensionName) {
    case "html":
      return "text/html";
    case "js":
      return "application/javascript";
    case "css":
      return "text/css";
    case "txt":
      return "text/plain";
    case "jpeg":
      return "image/jpeg";
    default:
      return "application/octet-stream";
  }
};

server.listen(port, host, ()=>{
  console.log(`server is listening on: http://localhost:${port}`);
})