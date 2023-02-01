const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Welcome to API bookstore my dear!')
})

app.listen(port, () => console.log(`[🚀 SERVER 🚀] on port: ${port}`))