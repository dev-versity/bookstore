const bookRouter = require('express').Router()
const Book = require('../models/book')

// GET all books
bookRouter.get('/all', (req, res) => {
    Book.find({}, (error, books) => {
        if(error) console.error(error)
        res.send(books)
    }) 
})