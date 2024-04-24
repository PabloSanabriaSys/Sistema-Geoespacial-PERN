import { pool } from "../db.js";

class UserModel {
    async createUser(userData) {
        const client = await pool.connect();
        try {
            const { nombre_usuario, nombres, apellido_paterno, apellido_materno, carnet_identificacion, email, telefono, contrasena, foto_perfil } = userData;
            const query = 'INSERT INTO usuario (nombre_usuario, nombres, apellido_paterno, apellido_materno, carnet_identificacion, correo, telefono, contrasena, foto_perfil) VALUES ($1, $2, $3, $4, $5, $6,$7, $8, $9) RETURNING *';
            const values = [nombre_usuario, nombres, apellido_paterno, apellido_materno, carnet_identificacion, email, telefono, contrasena, foto_perfil];
            const result = await client.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw new Error('Error creando el usuario: ' + error.message);
        } finally {
            client.release();
        }

    }
    
    async getUsersAll(withDireccion=false) {
        const client = await pool.connect();

        try {
            const query = !withDireccion ? 'SELECT * FROM usuario' : 'SELECT usuario.*,longitud,latitud FROM usuario JOIN direccion ON usuario.id = usuario_id';
            const result = await client.query(query);
            return result.rows;
        } catch (error) {
            throw new Error('Error obteniendo el usuario: ' + error.message);
        } finally {
            client.release();
        }
    }

    async getUserById(userId) {
        const client = await pool.connect();

        try {
            const query = 'SELECT * FROM usuario WHERE id = $1';
            const values = [userId];
            const result = await client.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw new Error('Error obteniendo el usuario: ' + error.message);
        } finally {
            client.release();
        }
    }

    async getUserByUserName(userName) {
        const client = await pool.connect();
        try {
            const query = 'SELECT * FROM usuario WHERE nombre_usuario = $1';
            const values = [userName];
            const result = await client.query(query, values);
            
            return result.rows[0];
        } catch (error) {
            throw new Error('Error obteniendo el usuario: ' + error.message);
        } finally {
            client.release();
        }
    }

    async updateUser(userId, updatedUserData) {
        const client = await pool.connect();

        try {
            const { username, email, password } = updatedUserData;
            const query = 'UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4 RETURNING *';
            const values = [username, email, password, userId];
            const result = await client.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw new Error('Error al actualizar el usurio: ' + error.message);
        } finally {
            client.release();
        }
    }

    async deleteUser(userId) {
        const client = await pool.connect();

        try {
            const query = 'DELETE FROM users WHERE id = $1 RETURNING *';
            const values = [userId];
            const result = await client.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw new Error('Error al eliminar el usurio: ' + error.message);
        } finally {
            client.release();
        }
    }
}

export default new UserModel();