const path = require('path')
const express = require('express')

const port = process.env.PORT || 3000

const app = express()

app.use(express.static(path.resolve(__dirname, 'dist')))

app.listen(port, () => console.log(`server listening on port ${port}`))