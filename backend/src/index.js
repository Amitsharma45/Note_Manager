const express= require('express');
const app= express();
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {router} = require('./Routers/router')
require('dotenv').config()
// connecting mongoose database

mongoose.connect('mongodb://localhost:27017/TaskManager');
mongoose.connection.once('open', () => {
    console.log('Mongodb connected')
})

//middle ware
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1',router)




app.listen(process.env.PORT,()=>{
    console.log("server is running at port 5000")
})

