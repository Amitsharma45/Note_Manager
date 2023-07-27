const repo= require('../Repository/UserRepo')

const createNote = (req,res) =>{
    repo.createNote(req).then((data)=>{
        console.log(data)
        res.status(200).send({
            status: 200,
            message: data
        });
        
    }).catch((err)=>{
        console.log(err)
        res.status(404).send('Something went wrong')
    })
}

module.exports = { createNote}