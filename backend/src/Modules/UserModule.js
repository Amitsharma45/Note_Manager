const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
}, {timestamps: true });

module.exports = mongoose.model('UserModle', UserSchema);