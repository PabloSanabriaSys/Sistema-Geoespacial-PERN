import { pool } from "../db.js";

class DireccionModel {
    async createDireccion(data) {
        const client = await pool.connect();
        try {
            const { lat, log, userId } = data;
            const query = 'INSERT INTO direccion (latitud, longitud, usuario_id, geom) VALUES ($1, $2, $3, ST_SetSRID(ST_MakePoint($2, $1), 4326)) RETURNING *';
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
        const client = await pool.connect();
        try {
            const query = 'SELECT latitud, longitud FROM direccion WHERE usuario_id = $1';
            const result = await pool.query(query, [userId]);

            return result.rows[0];

        } catch (error) {
            throw new Error('Error creando el usuario: ' + error.message);

        } finally {
            client.release();
        }
    }

    async getMunicipios() {
        const client = await pool.connect()
        try {
            const query = `
                SELECT 
                    ST_AsGeoJSON(geom) AS geojson,
                    municipio as nombre
                FROM  municipal 
                WHERE  departamen = 'Cochabamba'
            `;
            const result = await pool.query(query);
            return result.rows.map(row => ({
                ...JSON.parse(row.geojson),
                properties: { nombre: row.nombre }
            }));

        } catch (error) {
            throw new Error('Error obteniendo en la direccion: ' + error.message);

        } finally {
            client.release();
        }
    }

    async getMunicipio(municipioName) {
        const client = await pool.connect()
        try {
            const query = `SELECT ST_AsGeoJSON(municipal.geom) AS geojson FROM municipal WHERE municipal.municipio = $1`;
            const result = await pool.query(query, [municipioName]);
            //console.log(result.rows)
            return result.rows.map(row => ({
                ...JSON.parse(row.geojson),
                properties: { nombre: municipioName }
            }))[0];

        } catch (error) {
            throw new Error('Error obteniendo en la direccion: ' + error.message);

        } finally {
            client.release();
        }
    }

    async getCantones() {
        const client = await pool.connect()
        try {
            const query = `
                SELECT 
                    ST_AsGeoJSON(geom) AS geojson,
                    canton as nombre
                FROM  cantones_geo 
                WHERE  departamen = 'Cochabamba'
            `;
            const result = await pool.query(query);
            return result.rows.map(row => ({
                ...JSON.parse(row.geojson),
                properties: { nombre: row.nombre }
            }));

        } catch (error) {
            throw new Error('Error obteniendo en la direccion: ' + error.message);

        } finally {
            client.release();
        }
    }

    async getCanton(cantonName) {
        const client = await pool.connect()
        try {
            const query = `SELECT ST_AsGeoJSON(cantones_geo.geom) AS geojson FROM cantones_geo WHERE cantones_geo.canton = $1`;
            const result = await pool.query(query, [cantonName]);
            //console.log(result.rows)
            return result.rows.map(row => ({
                ...JSON.parse(row.geojson),
                properties: { nombre: cantonName }
            }))[0];

        } catch (error) {
            throw new Error('Error obteniendo en la direccion: ' + error.message);

        } finally {
            client.release();
        }
    }


    async getOTBs() {
        const client = await pool.connect()
        try {
            const query = `
                SELECT 
                    ST_AsGeoJSON(geom) AS geojson,
                    nom_dep as nombre
                FROM  departamentos
            `;
            const result = await pool.query(query);
            return result.rows.map(row => ({
                ...JSON.parse(row.geojson),
                properties: { nombre: row.nombre }
            }));

        } catch (error) {
            throw new Error('Error obteniendo en la direccion: ' + error.message);

        } finally {
            client.release();
        }
    }

    async getOTB(otbName) {
        const client = await pool.connect()
        try {
            const query = `SELECT ST_AsGeoJSON(geom) AS geojson FROM departamentos WHERE departamentos.nom_dep = $1`;
            const result = await pool.query(query, [otbName]);
            //console.log(result.rows)
            return result.rows.map(row => ({
                ...JSON.parse(row.geojson),
                properties: { nombre: otbName }
            }))[0];

        } catch (error) {
            throw new Error('Error obteniendo en la direccion: ' + error.message);

        } finally {
            client.release();
        }
    }


    async getManzanos() {
        const client = await pool.connect()
        try {
            const query = `
                SELECT 
                    ST_AsGeoJSON(geom) AS geojson,
                    gid as nombre
                FROM  manzanos2 
                WHERE  municpios = 'Cochabamba'
            `;
            const result = await pool.query(query);
            return result.rows.map(row => ({
                ...JSON.parse(row.geojson),
                properties: { nombre: row.nombre }
            }));

        } catch (error) {
            throw new Error('Error obteniendo en la direccion: ' + error.message);

        } finally {
            client.release();
        }
    }

    async getManzano(manzanoName) {
        const client = await pool.connect()
        try {
            const query = `SELECT ST_AsGeoJSON(manzanos2.geom) AS geojson FROM manzanos2 WHERE manzanos2.gid = $1`;
            const result = await pool.query(query, [manzanoName]);
            //console.log(result.rows)
            return result.rows.map(row => ({
                ...JSON.parse(row.geojson),
                properties: { nombre: manzanoName }
            }))[0];

        } catch (error) {
            throw new Error('Error obteniendo en la direccion: ' + error.message);

        } finally {
            client.release();
        }
    }

}

export default new DireccionModel();