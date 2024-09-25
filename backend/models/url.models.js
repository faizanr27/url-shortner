const mongoose = require('mongoose')

const urlSchema = mongoose.Schema(
    {
        shortenedUrl: {
            type: String,
            required: true,
        },
        originalUrl: {
            type: String,
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model('Url', urlSchema)