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


const login = (req, res) => {
    const token = generateToken(req.session.passport)
    res.status(200).send({ messaeg:'Login success', token: token });
}

module.exports = { createUser, login }