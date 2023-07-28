const repo = require('../Repository/UserRepo')

const createNote = (req, res) => {
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
            res.status(200).send({
                status: 200,
                data: data
            })

        })
        .catch((err) => {
            res.status(404).send(err)
        })
}

const deleteNote = (req, res) => {
    repo.deleteNote(req)
        .then((data) => {
            res.status(200).send(data)
        })
        .catch((err) => {
            console.log(err)
            res.status(404).send("")
        })
}
module.exports = { createNote, getNotes,deleteNote }