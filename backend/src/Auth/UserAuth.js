var jwt = require('jsonwebtoken');
const privateKey = "notemanger";
const passportLocal = require('passport-local');
const UserModule = require('../Modules/UserModule');
const bcrypt = require('bcrypt');
const generateToken = (userid) => {
    var token = jwt.sign(userid, privateKey);
    return token;
}

const verifyToken = (token) => {
    var result = jwt.verify(token, privateKey, (err, decode) => decode !== undefined ? decode : err);
    if (result instanceof Error) {
        return "Something went wrong"
    }
    return result;
}

const loginAuth = () => {
    return new passportLocal({ usernameField: 'email', passwordField: "password" }, function (username, password, done) {
        UserModule.findOne({ email: username })
            .then((user) => {
                if (!user) {
                    return done(null, false, { status: 409, message: "Invalid email id" })
                } else if (bcrypt.compareSync(password, user.password)) {
                    return done(null, user);
                } else {
                    return done(null, false, { status: 409, message: "Invalid password" })
                }
            }).catch((err)=>{
                return done(err)
            })

    });

}

module.exports = { generateToken, verifyToken, loginAuth }