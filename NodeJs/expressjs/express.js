const express = ("express")
const port = 4040

const app = express()
app.use(express.json())
app.get("/", async (req, res)=>{
    res.send("loveth is sleepy")
})

app.listen(port, ()=>{
    console.log(`server is listening to port ${port}`);
})

const express = require("express")
port = 4040
const exp = express()

exp.get("/", async(req,res)=>{
   res.send("where are u")
})

exp.listen(port, ()=>{
    console.log(`server is listening `);
})