const bookRouter = require('express').Router()
const Book = require('../models/book')

// GET all books
bookRouter.get('/all', (req, res) => {
    Book.find({}, (error, booksData) => {
        if(error) console.error(error)
        res.render("books", {books: booksData})

    }) 
})

// POST - create a new book

bookRouter.get("/new", (req, res) => {
    res.render("newBook");
})

bookRouter.post('/new', (req, res) => {
    let newBook = new Book(req.body)
    
    newBook.save((error, book) => {
        if (error) console.error(error)
        res.redirect("/books/all")
    })
})

// GET - get a book by id

bookRouter.route('/:id')

.get((req, res) => {
    Book.findById(req.params.id, (error, book) => {
        if (error) console.error(error)
        res.render("book", {book: book})
    })
})

// PUT - edit a book

bookRouter.get("/:id/edit", (req, res) => {
    Book.findById(req.params.id, (error, book) => {
    if (error) console.error(error)
    res.render("edit", {book: book})
    })  
    
})

bookRouter.post("/:id/edit",(req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, (error, book) => {
        if (error) console.error(error)
        res.redirect("/books/all")
    })
})

// DELETE - delete a book

bookRouter.get("/:id/delete", (req, res) => {
    Book.findByIdAndRemove(req.params.id, (error, book) => {
        if (error) console.error(error)
        res.redirect('/books/all');
    })
})

module.exports = bookRouter