const express= require('express');
const app= express();
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {router} = require('./Routers/router');
const cors = require('cors')
require('dotenv').config()
// connecting mongoose database

mongoose.connect('mongodb+srv://mongoadmin:amit1234@cluster0.ny6ohvf.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log('Mongodb connected')
})

//middle ware
app.use(cors())
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1',router)


app.listen(process.env.PORT,()=>{
    console.log("server is running at port 5000")
})

