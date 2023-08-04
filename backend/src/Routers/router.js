const express = require('express');
const router = express.Router();
const NoteControler = require('../Controllers/NoteController');
const UserContoler= require('../Controllers/UserController')
{
    // Create user;
    // get user profile
    // login user;
    // log out user;
    // forgot password
    // changer password
}
router.post('/createUser',UserContoler.createUser);

// get all notes of user by _id
router.get('/',(req,res)=>{
    res.send('running')
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