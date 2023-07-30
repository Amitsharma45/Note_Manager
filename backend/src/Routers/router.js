const express = require('express');
const router = express.Router();
const UserModle = require('../Modules/UserModule');
const userControler = require('../Controllers/UserController')

// get all notes of user by _id
router.get('/getNotes',userControler.getNotes)

//  add note in  database
router.post('/createNote',userControler.createNote);

// Update note by note id
router.put('/updateNote',userControler.updateNote)
// delete note by note _id
router.delete('/deleteNote',userControler.deleteNote)

module.exports = { router };    