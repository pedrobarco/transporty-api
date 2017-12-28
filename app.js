const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const routes = require('./routes/api')
const config = require('./config')

const app = express()

// connect to mongodb
mongoose.connect(config.mongodb.uris, { useMongoClient: true })
mongoose.Promise = global.Promise

app.use(bodyParser.json({limit: '5mb'}))

// initialize routes
app.use('/api', routes)

// error handling middleware
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message })
})

app.listen(config.express.port, () => {
  console.log(`Listening on port ${config.express.port}!`)
})
