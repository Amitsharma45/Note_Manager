const UserModule = require("../Modules/UserModule")
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
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
                        resolve({
                            message:'User resgister success',
                            user:false
                        })
                    })
                }

            })
    })

}

module.exports = { createUser }