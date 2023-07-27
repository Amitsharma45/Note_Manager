const NoteModule = require('../Modules/NoteModule');
const { v4: uuidv4 } = require('uuid');
const createNote = (req) => {
    return new Promise((resolve, reject) => {
        NoteModule.find({_id : req.body._id}).then((data)=>{
            console.log(!data)
            if(data){
                resolve('have data');
            }else{
                reject('emopty')
            }
        }).catch((err)=>{
            reject(err)
        })


    //     let newNote = new NoteModule({
    //         _id:  uuidv4() ,
    //         notes: [{
    //             _id:  uuidv4() ,
    //             tittle: req.body.tittle,
    //             notebody: req.body.notebody
    //         }]
    //     })
    //     newNote.save().
    //         then(() => {
    //             resolve('Working')
    //         })
    //         .catch((err) => {
    //             reject(err)
    //         })
    })

}

module.exports = { createNote };