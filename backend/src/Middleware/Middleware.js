const privateKey = "notemanger";
var jwt = require('jsonwebtoken');
const verifyUser = (req,res,next)=>{
    console.log('dsfdsfsfs')
    var result = jwt.verify(req.headers.authorization, privateKey, (err, decode) => decode !== undefined ? decode : err);
    if (result instanceof Error) {
        res.send( {message:"Token expired", expire: true});
    }else{
        req.user= result.user;
        next();
    }
}

module.exports = {verifyUser}