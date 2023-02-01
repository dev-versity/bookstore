const bookRouter = require('express').Router()
const Book = require('../models/book')

// GET all books
bookRouter.get('/all', (req, res) => {
    Book.find({}, (error, books) => {
        if(error) console.error(error)
        res.send(books)
    }) 
})

// POST - create a new book

bookRouter.post('/new', (req, res) => {
    let newBook = new Book(req.body)
    console.log(newBook)
    newBook.save((error, book) => {
        if (error) console.error(error)
        res.send(book)
    })
})