require('dotenv').config()
const express = require('express');
const app=express()
const expressLayout=require('express-ejs-layouts')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const connectDB=require('./server/config/db')


app.use(express.static('public'))

const PORT = 5000 || process.env.PORT;

connectDB();
app.use(express.urlencoded({ extended: true })) // to get the search data on searching 
app.use(express.json())

app.use(expressLayout)
app.set('layout','./layout/main')
app.set('view engine','ejs')

app.use('/',require('./server/routes/main'))
app.listen(PORT,()=>{
    console.log((`app listing on port ${PORT}`))
})