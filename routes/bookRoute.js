const bookRouter = require('express').Router()
const Book = require('../models/book')

// GET all books
bookRouter.get('/all', (req, res) => {
    Book.find({}, (error, books) => {
        if(error) console.error(error)
        res.render("books", {books: books})

    }) 
})

// POST - create a new book

bookRouter.post('/new', (req, res) => {
    let newBook = new Book(req.body)
    
    newBook.save((error, book) => {
        if (error) console.error(error)
        res.send(book)
    })
})

// GET - get a book by id

bookRouter.route('/:id')

.get((req, res) => {
    Book.findById(req.params.id, (error, book) => {
        if (error) console.error(error)
        res.send(book)
    })
})

// PUT - edit a book

.put((req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, (error, book) => {
        if (error) console.error(error)
        res.send(book)
    })
})

// DELETE - delete a book

.delete((req, res) => {
    Book.findByIdAndRemove(req.params.id, (error, book) => {
        if (error) console.error(error)
        res.send('Gone !');
    })
})

module.exports = bookRouter