import { pool } from "../db.js";

class DireccionModel {
    async createDireccion(data) {
        const client = await pool.connect();
        try {
            const { lat, log, userId } = data;
            const query = 'INSERT INTO direccion (latitud, longitud, usuario_id) VALUES ($1, $2, $3) RETURNING *';
            const values = [lat, log, userId];
            const result = await client.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw new Error('Error creando el la direccion: ' + error.message);
        } finally {
            client.release();
        }
    };

    async getDireccionByUser(userId) {
        const client = pool.connect()
        try {
            const query = 'SELECT latitud, longitud FROM direccion WHERE usuario_id = $1';
            const result = await pool.query(query, [userId]);

            return result.rows[0];

        } catch (error) {
            throw new Error('Error creando el usuario: ' + error.message);

        } finally {
            await client.release();
        }
    }

}

export default new DireccionModel();