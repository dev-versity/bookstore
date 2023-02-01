const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    name: String,
    author: String,
    pages: {
        type: Number,
        min: 1
    },
    published: {
        type: Date,
        default: Date.now()
    },
    category: [
        String
    ]
})

const Book = mongoose.model('book', bookSchema)
module.exports = Book