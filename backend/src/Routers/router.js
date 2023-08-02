const express = require('express');
const router = express.Router();
const UserModle = require('../Modules/UserModule');
const userControler = require('../Controllers/UserController');
{
    // Create user;
    // login user;
    // log out user;
    // forgot password
    // changer password
}

// get all notes of user by _id
router.get('/',(req,res)=>{
    res.send('running')
})
router.get('/getNotes',userControler.getNotes)

//  add note in  database
router.post('/createNote',userControler.createNote);

// Update note by note id
router.put('/updateNote',userControler.updateNote)

router.put('/favoriteNote',userControler.favroiteNote)
router.put('/archiveNote',userControler.archiveNote)
// delete note by note _id
router.delete('/deleteNote',userControler.deleteNote)

module.exports = { router };    