const mongoose = require('mongoose')

const Geo = require('./geo')

const Schema = mongoose.Schema

const StationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: Geo,
    required: true
  }
})

const Station = mongoose.model('station', StationSchema)

module.exports = Station
