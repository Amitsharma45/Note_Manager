const { generateToken } = require('../Auth/UserAuth');
const UserRepo = require('../Repository/UserRepo')
const createUser = (req, res) => {
    UserRepo.createUser(req)
        .then((data) => {
            res.status(200).send(data);
        }).catch((err) => {
            res.send(err)
        })
}
const getProfile =(req,res)=>{
    UserRepo.getProfile(req).then((data)=>{
        res.status(200).send({data,message:'user profile'})
    })
}


const login = (req, res) => {
    const token = generateToken(req.session.passport)
    const userid= req.session.passport.user
    res.status(200).send({ messaeg:'Login success', token: token,userid });
}

module.exports = { createUser, login ,getProfile}