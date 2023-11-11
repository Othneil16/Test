//using a callback to implement an aschronous program

//impot the fs module
const fs = require("fs")

//get the document/file
let myDocument = "./callBackTest.txt"

//implement the read operation with a callack
fs.readFile(myDocument,"utf8", (error, data)=>{
   if(error){
            console.log("Message "+ error)
            console.log("Message : can't work")
   }
   else{
      console.log(data)
   }
}) 