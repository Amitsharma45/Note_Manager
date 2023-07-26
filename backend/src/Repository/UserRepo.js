const NoteModule = require('../Modules/NoteModule');

const createNote =(req)=>{
    return new Promise((resolve,reject)=>{
        let newNote = new NoteModule({
            _id:123555,
            notes: [{
                _id: req.body.id,
                tittle: req.body.tittle,
                notebody: req.body.notebody
            }]
        })
        newNote.save().
            then(() => {
                resolve('Working')
            })
            .catch((err) => {
                reject('error')
            })
    })

}

module.exports = { createNote};