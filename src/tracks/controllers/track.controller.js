const trackModel = require('../models/track.model')


class trackController {
    async getTracks(req, res) {
        try {
            const result = await trackModel.getTracks()
            res.status(200).json(result)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async getTrack(req, res) {
        try {
            const result = await trackModel.getTrack(req.params.id)
            res.status(200).json(result)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async createTrack(req, res) {
        try {
            const result = await trackModel.create(req.body)
            res.status(201).json(result) 
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async updateTrack(req, res) {
        try {
            const body = req.body
            const result = await trackModel.update(body, req.params.id)
            res.status(201).json(result) 
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async deleteTrack(req, res) {
        try {
            const result = await trackModel.delete(req.params.id)
            res.status(204).json(result)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}
module.exports = new trackController();