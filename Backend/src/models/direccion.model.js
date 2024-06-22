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


    async getTotalDataAmount() {
        const client = await pool.connect()
        try {
            const query = `WITH clientes_por_mes AS (
    SELECT 
        TO_CHAR(DATE_TRUNC('month', created_at), 'TMMonth') AS month,
        DATE_TRUNC('month', created_at) AS month_date,
        COUNT(*) AS cantidad_clientes
    FROM 
        usuario
    WHERE 
        created_at >= '2024-01-01' AND created_at < '2024-08-01'
    GROUP BY 
        month_date
    ORDER BY 
        month_date
)

SELECT 
    (SELECT COUNT(*) FROM usuario) AS total_clients,
    (SELECT COUNT(*) FROM municipal WHERE departamen = 'Cochabamba') AS total_municipios,
    (SELECT COUNT(*) FROM cantones_geo WHERE departamen = 'Cochabamba') AS total_cantones,
    (SELECT COUNT(*) FROM manzanos2 WHERE municpios = 'Cochabamba') AS total_manzanos,
    (SELECT COUNT(*) FROM direccion 
     JOIN municipal ON ST_Contains(municipal.geom, direccion.geom) 
     WHERE municipal.municipio = 'Cochabamba') AS m_cochabamba,
    (SELECT COUNT(*) FROM direccion 
     JOIN municipal ON ST_Contains(municipal.geom, direccion.geom) 
     WHERE municipal.municipio = 'Quillacollo') AS m_quillacollo,
    (SELECT COUNT(*) FROM direccion 
     JOIN municipal ON ST_Contains(municipal.geom, direccion.geom) 
     WHERE municipal.municipio = 'Sacaba') AS m_sacaba,
    (SELECT COUNT(*) FROM direccion 
     JOIN municipal ON ST_Contains(municipal.geom, direccion.geom) 
     WHERE municipal.municipio = 'Colcapirhua') AS m_colcapirhua,
    (SELECT COUNT(*) FROM direccion 
     JOIN departamentos ON ST_Contains(departamentos.geom, direccion.geom) 
     WHERE departamentos.nom_dep = 'COCHABAMBA') AS d_cochabamba,
    (SELECT COUNT(*) FROM direccion 
     JOIN departamentos ON ST_Contains(departamentos.geom, direccion.geom) 
     WHERE departamentos.nom_dep = 'SANTA CRUZ') AS d_santacruz,
    (SELECT COUNT(*) FROM direccion 
     JOIN departamentos ON ST_Contains(departamentos.geom, direccion.geom) 
     WHERE departamentos.nom_dep = 'LA PAZ') AS d_lapaz,
    (SELECT json_agg(row_to_json(clientes_por_mes)) 
     FROM clientes_por_mes) AS clientes_registrados_por_mes;
	 ;`;
            const result = await pool.query(query);
            //console.log(result)
            return result.rows[0];

        } catch (error) {
            throw new Error('Error obteniendo datos para el DashBoart: ' + error.message);

        } finally {
            client.release();
        }
    }

}

export default new DireccionModel();