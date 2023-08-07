const UserRepo= require('../Repository/UserRepo')
const createUser =( req,res)=>{
    UserRepo.createUser(req)
    .then((data)=>{
        res.status(200).send(data);
    }).catch((err)=>{
        res.send(err)
    })
}

const login = (req,res) =>{
    
}

module.exports= {createUser}