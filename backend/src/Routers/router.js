const express = require('express');
const router = express.Router();
const NoteControler = require('../Controllers/NoteController');
const UserContoler= require('../Controllers/UserController');
const bcrypt = require('bcrypt');
const { generateToken, verifyToken } = require('../Auth/UserAuth');
const passport = require('passport');
const passportLocal = require('passport-local');

{
    // Create user;
    // get user profile
    // login user;
    // log out user;
    // forgot password
    // changer password
}
router.post('/createUser',UserContoler.createUser);

router.post('/login',passport.authenticate('local'),(req,res)=>{
    const token = generateToken(req.session.passport)
    // console.log(req.session.passport)
    res.cookie("jwt", token, { secure: true,httpOnly: false, maxAge: 6000000 });
    res.status(200).send({message:token});
})
router.get('/logout',(req,res)=>{
    res.send(verifyToken(req.body.token))
})
router.get('/profile')


// get all notes of user by _id
router.get('/password',(req,res)=>{
    res.send(bcrypt.compareSync(req.body.pass, '$2b$10$yS7WLZA6k94OMtzJ92.Xwu3xxYSHQ1/ykfxAXdkvZ/kup2qiBRshO'))
})
router.get('/getNotes',NoteControler.getNotes)

//  add note in  database
router.post('/createNote',NoteControler.createNote);

// Update note by note id
router.put('/updateNote',NoteControler.updateNote)

router.put('/favoriteNote',NoteControler.favroiteNote)
router.put('/archiveNote',NoteControler.archiveNote)
// delete note by note _id
router.delete('/deleteNote',NoteControler.deleteNote)

module.exports = { router };    