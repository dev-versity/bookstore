const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const db = mongoose.connection
db.once("open", () => {
    console.log('[๐Database] MongoDB connected')
})

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/bookstoredb');
}

app.use(express.urlencoded({
    extended: true
}))

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.send('Welcome to API bookstore my dear!')
})

app.use('/books', require('./routes/bookRoute'))

app.listen(port, () => console.log(`[๐ SERVER ๐] on port: ${port}`))