const mongoose = require('mongoose')

const Station = require('./station').schema
const Transporter = require('./transporter').schema

const Schema = mongoose.Schema

const BusSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  route: {
    type: String,
    required: true
  },
  transporter: {
    type: Transporter,
    required: true
  },
  stops: {
    type: [Station],
    required: true
  }
})

const Bus = mongoose.model('bus', BusSchema)

module.exports = Bus
