const express = require('express')
const trackController = require('./controllers/track.controller')
const { getTrack } = require('./models/track.model')
const router = express.Router()

// ROUTE GET //
router.get('/', trackController.getTracks) 
router.get('/:id', trackController.getTrack)

// ROUTE POST //
router.post('/', trackController.createTrack)

// ROUTE UPDATE //
router.put('/:id', trackController.updateTrack)

// ROUTE DELETE //
router.delete('/:id', trackController.deleteTrack)


module.exports = router;