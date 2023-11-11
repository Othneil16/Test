  //Impor the file
  
  const fs = require("fs")

  async function readFromFile() {
    try{
        await fs.readFile("./Kizz_Daniel_-_Shu-Peru_FlexyOkay.com.mp3","utf8", (error, data) =>{
           if (error) {
             console.log("This data doesn't exist");
           }
           else{
        console.log(data);
           }
        })
    } catch (e) {
      console.log(e);
    }
  }
  readFromFile()