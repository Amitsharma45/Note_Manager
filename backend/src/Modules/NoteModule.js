const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    _id: {
        required: true,
        type: Number
    },
    notes: [
        {
            _id: Number,
            tittle: String,
            notebody: String
        }
    ]

}, { timestamps: true });

module.exports = mongoose.model('Notes', NoteSchema);