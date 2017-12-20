const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TransporterSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  }
})

const Transporter = mongoose.model('transporter', TransporterSchema)

module.exports = Transporter
