const express = require('express');
const router = express.Router();
const UserModle = require('../Modules/UserModule');
const userControler = require('../Controllers/UserController')

router.post('/home', (req, res) => {
    let createuser = new UserModle({
        first_name: req.body.first_name,
        last_name: req.body.last_name
    })
    createuser.save().then(() => {
        console.log(req.body)
        res.send('Module created')
    }).catch((err) => {
        res.send('error')
    })
})

router.post('/createNote',userControler.createNote);

module.exports = { router };    