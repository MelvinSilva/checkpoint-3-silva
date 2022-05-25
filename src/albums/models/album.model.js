const mysql = require('mysql2')


// CONNEXION BDD //
class AlbumModel {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })

    async getAlbums() {
        try {
            const result = await this.connection.promise().query('SELECT * FROM album')
            return result[0]
        }
        catch (error) {
            throw error
        }
    }

    async getAlbum(id) {
        try {
            const result = await this.connection.promise().query('SELECT * FROM album WHERE id = ?', [id])
            return result[0]
        }
        catch (error) {
            throw error
        }
    }

    async getAlbumByTrack(id) {
        try {
            const result = await this.connection.promise().query('SELECT * FROM album INNER JOIN track ON track.id_album = album.id WHERE album.id = ?', [id])
            return result[0]
        }
        catch (error) {
            throw error
        }
    }

    async create(newAlbum) {
        try {
            const result = await this.connection.promise().query('INSERT INTO album SET ?', [newAlbum])
            return result[0]
        }
        catch (error) {
            throw error
        }
    }

    async update (body, id) {
        try {
            const result = await this.connection.promise().query('UPDATE album SET ? WHERE id = ?', [body, id])
            return result[0]
        }
        catch (error) {
            throw error
        }
    }

    async delete (id) {
        try {
            const result = await this.connection.promise().query('DELETE FROM album WHERE id = ?', [id])
            return result[0]
        }
        catch (error) {
            throw error
        }
    }    
}

module.exports = new AlbumModel;