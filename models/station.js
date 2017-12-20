const mongoose = require('mongoose')

const Schema = mongoose.Schema

const StationSchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

const Station = mongoose.model('station', StationSchema)

module.exports = Station
