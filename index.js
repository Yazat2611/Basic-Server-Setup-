const express = require("express")

require("dotenv").config();

const app = express()

// const port = 4000

app.get('/',(req,res)=> {
    res.send("Hello World")
})

app.get('/twitter',(req,res) => {
    res.send("Welcome to twitter")
})

app.listen(process.env.PORT,()=>{
    console.log(`listening at post ${process.env.PORT}`);
})