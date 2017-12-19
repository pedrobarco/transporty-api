const mongoose = require('mongoose')

const Schema = mongoose.Schema

// create bus-station Schema
const BusStationSchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

// create bus Schema
const BusSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  transporter: {
    type: String,
    required: true
  },
  from: {
    type: BusStationSchema,
    required: true
  },
  to: {
    type: BusStationSchema,
    required: true
  },
  via: {
    type: BusStationSchema
  },
  stations: {
    type: [BusStationSchema],
    required: true
  }
})

const Bus = mongoose.model('bus', BusSchema)

module.exports = Bus
