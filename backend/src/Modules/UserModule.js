const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    emailid: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
}, {timestamps: true });

module.exports = mongoose.model('UserModle', UserSchema);