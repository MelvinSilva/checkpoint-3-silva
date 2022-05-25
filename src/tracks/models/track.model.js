const mysql = require('mysql2')


// CONNEXION BDD //
class trackModel {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })


    async getTracks() {
        try {
            const result = await this.connection.promise().query('SELECT * FROM track')
            return result[0]
        }
        catch (error) {
            throw error
        }
    }

    async getTrack(id) {
        try {
            const result = await this.connection.promise().query('SELECT * FROM track WHERE id = ?', [id])
            return result[0]

        }
        catch (error) {
            throw error
        }
    }


    async create(create) {
        try {
            const result = await await this.connection.promise().query('INSERT INTO track SET ?', [create])
            return result[0]
        }
        catch (error) {
            throw error
        }
    }

    async update(body, id) {
        try {
            const result = await this.connection.promise().query('UPDATE track set ? WHERE id = ?', [body, id])
            return result[0]
        }
        catch (error) {
            throw error
        }
    }

    async delete(id) {
        try {
            const result = await this.connection.promise().query('DELETE FROM track WHERE id = ?', [id])
            return result[0]
        }
        catch (error) {
            throw error
        }
    }


}


module.exports = new trackModel()