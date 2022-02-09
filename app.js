const express = require("express")
const app = express()

app.get("/", (req,res,next)=>{
    res.status(200).send("working")
})

app.listen(5000, ()=>{
    console.log('server running on port 5000')
})

module.exports = app