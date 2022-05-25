const express = require('express')
const albumController = require('./controllers/album.controller')
const router = express.Router()

// ROUTES GET //
router.get('/', albumController.getAllAlbums) 
router.get('/:id', albumController.getAlbum)
router.get('/:id/tracks', albumController.getAlbumTrack)

// ROUTE POST //
router.post('/', albumController.createAlbum)

// ROUTE UPDATE //
router.put('/:id', albumController.updateAlbum)

// ROUTE DELETE //
router.delete('/:id', albumController.deleteAlbum)

module.exports = router;