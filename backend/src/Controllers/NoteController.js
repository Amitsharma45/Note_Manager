const repo =  require('../Repository/NoteRepo')
const UserRepo=  require('../Repository/UserRepo')

const createNote = (req, res) => {
    console.log(req.body)
    repo.createNote(req).then((data) => {
        res.status(200).send({
            status: 200,
            message: data
        });

    }).catch((err) => {
        res.status(404).send('Something went wrong')
    })
}

const getNotes = (req, res) => {
    repo.getNotes(req)
        .then((data) => {
            res.status(200).send(data)
        })
        .catch((err) => {
            res.status(404).send(err)
        })
}
const updateNote = (req, res) => {
    repo.updateNote(req)
        .then((data) => {
            res.status(200).send({
                status: 200,
                message: data
            });
        })
        .catch((err) => {
            res.status(404).send('err')
        })
}
const favroiteNote = (req, res) => {
    repo.favroiteNote(req)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send(err)
        })
}

const archiveNote = (req, res) => {
    repo.archiveNote(req)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send(err)
        })
}
const trashNote = (req, res) => {
    repo.trashNote(req)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send(err)
        })
}

const deleteNote = (req, res) => {
    console.log(req.body)
    repo.deleteNote(req)
        .then((data) => {
            res.status(200).send(data)
        })
        .catch((err) => {
            console.log(err)
            res.status(404).send("Error")
        })
}
module.exports = { createNote, favroiteNote, archiveNote ,getNotes, deleteNote, trashNote,updateNote };