const UserRepo= require('../Repository/UserRepo')
const createUser =( req,res)=>{
    console.log(req.body)
    UserRepo.createUser(req)
    .then((data)=>{
        res.status(200).send(data);
    }).catch((err)=>{
        res.send(err)
    })
}

module.exports= {createUser}