const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    _id: {
        required: true,
        type: String
    },
    notes: [
        {
            type: new mongoose.Schema({

                _id: String,
                tittle: String,
                notebody: String,
                isFavorite: Boolean,
                isArchive:Boolean,
                isTrash:Boolean
            }
            , { timestamps: true }
            )
        }
    ]

}, { timestamps: true });

module.exports = mongoose.model('Notes', NoteSchema);

