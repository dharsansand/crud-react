const express = require('express')
const connect = require('./connect/db')
const cors=require("cors")
require("dotenv").config();
const routes =require("./routes/routes")
const app = express()
app.use(cors());
app.use(express.json());



connect()


app.use(express.json());

app.use('/api/item',routes)
app.listen(5000,()=>{
    console.log('port connect')
})