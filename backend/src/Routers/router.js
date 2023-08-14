const express = require('express');
const router = express.Router();
const NoteControler = require('../Controllers/NoteController');
const UserContoler= require('../Controllers/UserController');
const bcrypt = require('bcrypt');
const { generateToken, verifyToken } = require('../Auth/UserAuth');
const passport = require('passport');
const passportLocal = require('passport-local');
const {verifyUser} = require('../Middleware/Middleware')

// CRUD operaton in User 
router.post('/createUser',UserContoler.createUser);
router.post('/login',passport.authenticate('local') ,UserContoler.login)
router.get('/isAuth',(req,res)=>{
    console.log(req.headers.authorization)
    res.status(200).send(verifyToken(req.headers.authorization))
})
router.get('/profile', verifyUser,UserContoler.getProfile)


// CRUD operation in Notes
router.get('/getNotes',NoteControler.getNotes)
router.post('/createNote',NoteControler.createNote);
router.put('/updateNote',NoteControler.updateNote)
router.put('/favoriteNote',NoteControler.favroiteNote)
router.put('/archiveNote',NoteControler.archiveNote);
router.put('/trashNote',NoteControler.trashNote);
router.delete('/deleteNote',NoteControler.deleteNote)

module.exports = { router };    