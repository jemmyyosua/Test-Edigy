const express = require('express')
const path = require('./routes')

require('dotenv').config()

const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');

// exp.use(bodyParser.json({ type: '*' }))
app.use(bodyParser.urlencoded({ extended: true }));

const port = 1500

app.use(express.json())
app.use(cors())

// Add endpoint grouping and routing
app.use('/test', path)
app.use('/uplouds', express.static('uplouds'))

app.listen(port , () => console.log(`Server Running on port ${port}`))