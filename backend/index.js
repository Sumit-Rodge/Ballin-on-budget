const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT;


//middleware
app.use(cors());
app.use(express());


app.get('/',(req,res)=>{
    res.send("fuck yeah!")
})

const server = ()=>{
    app.listen(PORT,()=>{
        console.log("Listening at port : ",PORT)
    })
}

server();