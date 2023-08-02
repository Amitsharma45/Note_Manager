const NoteModule = require('../Modules/NoteModule');
const { v4: uuidv4 } = require('uuid');
const createNote = (req) => {
    return new Promise((resolve, reject) => {
        NoteModule.find({ _id: req.body._id }).then((data) => {
            if (data.length !== 0) {
                NoteModule.findOneAndUpdate({ _id: req.body._id },
                    { $push: { notes: { _id: uuidv4(), tittle: req.body.tittle, notebody: req.body.notebody, isFavorite: false, isArchive: false } } })
                    .then((data) => {
                        if (data) {
                            resolve('Data Push Success');
                        } else {
                            reject('Something went wrong')
                        }
                    }).catch((err) => {
                        reject(err)
                    })
            } else {
                let newNote = new NoteModule({
                    _id: req.body._id,
                    notes: [{
                        _id: uuidv4(),
                        tittle: req.body.tittle,
                        notebody: req.body.notebody,
                        isFavorite: false,
                        isArchive: false
                    }]
                })
                newNote.save().
                    then(() => {
                        resolve('New array created')
                    })
                    .catch((err) => {
                        reject(err)
                    })
            }
        }).catch((err) => {
            reject(err)
        })
    })

}

const getNotes = (req) => {
    return new Promise((resole, reject) => {
        NoteModule.findOne({ _id: req.query._id })
            .then((data) => {
                if(data){
                    resole(data);
                }
                resole([{
                    message:'Not Data',
                    notes: []
                }])
            })
            .catch((err) => {
                reject('SomeThing went wrong')
            })
    })
}

const updateNote = (req) => {

    return new Promise((resole, reject) => {
        NoteModule.findOneAndUpdate({ _id: req.body._id }, { $set: { "notes.$[elem].tittle": req.body.tittle, "notes.$[elem].notebody": req.body.notebody } },
            { arrayFilters: [{ "elem._id": req.body.noteid }] })
            .then((data) => {
                resole("Update Success");
            })
            .catch((err) => {
                reject(err)
            })
    });

}

const favroiteNote = (req) => {
    return new Promise((resole, reject) => {
        NoteModule.findOneAndUpdate({ _id: req.body._id }, { $set: { "notes.$[elem].isFavorite": req.body.isFavorite } },
            { arrayFilters: [{ "elem._id": req.body.noteid }] })
            .then((data) => {
                resole('Update Favorite success')
            })
            .catch((err) => {
                reject(err)
            })
    })
}
const archiveNote = (req) => {
    return new Promise((resole, reject) => {
        NoteModule.findOneAndUpdate({ _id: req.body._id }, { $set: { "notes.$[elem].isArchive": req.body.isArchive } },
            { arrayFilters: [{ "elem._id": req.body.noteid }] })
            .then((data) => {
                resole('Update Archive success')
            })
            .catch((err) => {
                reject(err)
            })
    })
}

const deleteNote = (req) => {
    return new Promise((resolve, reject) => {
        NoteModule.findOneAndUpdate({ _id: req.body._id }, { $pull: { notes: { _id: req.body.noteid } } })
            .then((data) => {
                resolve('Note delete success');
            })
            .catch(() => {
                reject('someting went wrong')
            })

    })
}

module.exports = { createNote, favroiteNote,archiveNote, getNotes, deleteNote, updateNote };

