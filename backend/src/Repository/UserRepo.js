const UserModule = require("../Modules/UserModule")
const { v4: uuidv4 } = require('uuid');
const createUser = (req) => {
    return new Promise((resolve, reject) => {
        UserModule.findOne({ emailid: req.body.emailid })
            .then((data) => {
                console.log(data)
                if (data) {
                    reject({
                        message:"User already present"
                    })
                }else{
                    let newUser= new UserModule({
                        _id: uuidv4(),
                        firstName: req.body.firstName,
                        lastName:req.body.lastName,
                        emailid: req.body.emailid,
                        password: req.body.password
                    })
                    newUser.save()
                    .then((data)=>{
                        resolve('User resgister success')
                    })
                }

            })
    })

}

module.exports = { createUser }