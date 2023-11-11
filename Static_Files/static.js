const express = require("express")
const fs = require("fs")
const path = require("path")
const port = 3002

const app = express()

const filePath = path.join(__dirname, "/public")
app.use(express.static(filePath))

app.listen(port, ()=>{
    console.log(`server is listening on ${port}`);
})




/*

app.get("/Static_Files",(req,res)=>{
    fs.exists(filePath, (fileExist) => {
        if (fileExist) {
          // read the file
          fs.readFile(filePath, "utf-8", (err, data) => {
            if (err) {
              res.status(200).send("Server error");
            } else {
              // pass the content of the file here
              const contentType = getContentType(filePath);
              res.status(200).contentType(contentType).send(data);
            }
          });
        } else {
          res.status(404).send("File not found");
        }
      });
})
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

*/