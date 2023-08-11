var jwt = require('jsonwebtoken');
const privateKey = "notemanger";
const passportLocal = require('passport-local');
const UserModule = require('../Modules/UserModule');
const bcrypt = require('bcrypt');
const generateToken = (userid) => {
    var token = jwt.sign(userid, privateKey, {
        expiresIn: "11m"
    });
    console.log(token)
    return token;
}

const verifyToken = (token) => {
    var result = jwt.verify(token, privateKey, (err, decode) => decode !== undefined ? decode : err);
    if (result instanceof Error) {
        return false
    } else {
        return true
    }
}

const loginAuth = () => {
    return new passportLocal({ usernameField: 'email', passwordField: "password" }, async function (username, password, done) {
        await UserModule.findOne({ email: username })
            .then((user) => {
                if (!user) {
                    console.log('err')
                    return done(null, false, { status: 409, message: "Invalid email id" })
                } else if (bcrypt.compareSync(password, user.password)) {
                    return done(null, user);
                } else {
                    return done(null, false, { status: 409, message: "Invalid password" })
                }
            }).catch((err) => {
                return done(err)
            })

    });

}

module.exports = { generateToken, verifyToken, loginAuth }