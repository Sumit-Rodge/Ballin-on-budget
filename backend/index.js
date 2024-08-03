const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs')
const app = express();

require('dotenv').config();

const PORT = process.env.PORT;


//middleware
app.use(cors());
app.use(express());
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("fuck yeah!")
})

//Routes
readdirSync('./routes').map((route)=>{
    app.use('/api/v1',require('./routes/'+route))
})

const server = ()=>{ 
    db();
    app.listen(PORT,()=>{
        console.log("Listening at port : ",PORT)
    })
}

server();