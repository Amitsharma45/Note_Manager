const UserModule = require("../Modules/UserModule")
const bcrypt = require('bcrypt');
const { reject } = require("bcrypt/promises");
const { v4: uuidv4 } = require('uuid');
const { generateToken } = require("../Auth/UserAuth");
const createUser = (req) => {
    return new Promise((resolve, reject) => {
        UserModule.findOne({ email: req.body.email })
            .then((data) => {
                if (data) {
                    reject({
                        message:"User already present",
                        user: true
                    })
                }else{
                    let newUser= new UserModule({
                        _id: uuidv4(),
                        fullname: req.body.fullname,
                        email: req.body.email,
                        password: bcrypt.hashSync(req.body.password,10,function(err, result){
                            return result
                        })
                    })
                    newUser.save()
                    .then((data)=>{
                        const token = generateToken({user:data._id})
                        resolve({
                            message:'User resgister success',
                            user:false,
                            token:token
                        })
                    })
                }

            })
    })

}

const getProfile= (req)=>{
    return new Promise((resolve,reject)=>{
        UserModule.findOne({_id:req.user}).then((data)=>{
            resolve(data)
        })
    })
}
module.exports = { createUser ,getProfile }