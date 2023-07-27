const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    _id: {
        required: true,
        type: String
    },
    notes: [
        {
            _id: String,
            tittle: String,
            notebody: String
        }
    ]

}, { timestamps: true });

module.exports = mongoose.model('Notes', NoteSchema);