const express = require('express')

const Bus = require('../models/bus')

const router = express.Router()

// get a list of bus from the db
router.get('/bus', (req, res, next) => {
  Bus.find().then(buses => {
    res.send(buses)
  })
})

// add a new bus to the db
router.post('/bus', (req, res, next) => {
  Bus.create(req.body).then(bus => {
    res.send(bus)
  }).catch(next)
})

// update a bus in the db
router.put('/bus/:id', (req, res, next) => {
  Bus.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    Bus.findOne({ _id: req.params.id }).then(bus => {
      res.send(bus)
    })
  })
})

// delete a ninja from the db
router.delete('/bus/:id', (req, res, next) => {
  Bus.findByIdAndRemove({ _id: req.params.id }).then(bus => {
    res.send(bus)
  })
})

module.exports = router
