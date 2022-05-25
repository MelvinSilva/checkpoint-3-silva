const albumModel = require('../models/album.model')

class albumController {
    async getAllAlbums(req, res) {
        try {
            const result = await albumModel.getAlbums()
            res.status(200).json(result)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async getAlbum(req, res) {
        try {
            const result = await albumModel.getAlbum(req.params.id)
            if(!result) {
                res.status(400).send("Album not found")
            } else {
                res.status(200).json(result)
            }
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async getAlbumTrack(req, res) {
        try {
            const result = await albumModel.getAlbumByTrack(req.params.id)
            res.status(200).json(result)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async createAlbum(req, res) {
        try {
            const result = await albumModel.create(req.body)
            res.status(201).json(result)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async updateAlbum(req, res) {
        try {
            const body = req.body
            const result = await albumModel.update(body, req.params.id)
            res.status(204).json(result)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async deleteAlbum(req, res) {
        try {
            const result = await albumModel.delete(req.params.id)
            res.status(204).json(result)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

}

module.exports = new albumController;