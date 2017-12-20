const mongoose = require('mongoose')

const Station = require('./station').schema
const Transporter = require('./transporter').schema

const Schema = mongoose.Schema

const BusSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  transporter: {
    type: Transporter,
    required: true
  },
  from: {
    type: Station,
    required: true
  },
  to: {
    type: Station,
    required: true
  },
  via: {
    type: Station
  },
  stations: {
    type: [Station],
    required: true
  }
})

const Bus = mongoose.model('bus', BusSchema)

module.exports = Bus
