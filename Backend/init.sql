-- Primero, eliminamos las tablas existentes si existen
DROP TABLE IF EXISTS direccion;
DROP TABLE IF EXISTS usuario;

-- Luego, creamos las nuevas tablas
CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    nombre_usuario VARCHAR(255) UNIQUE NOT NULL,
    nombres VARCHAR(255) NOT NULL,
    apellido_paterno VARCHAR(255) NOT NULL,
    apellido_materno VARCHAR(255) NOT NULL,
    carnet_identificacion VARCHAR(255) NOT NULL,
    correo VARCHAR(255)  NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    foto_perfil TEXT, -- Campo para almacenar la imagen como datos en URL
    rol VARCHAR(20) NOT NULL DEFAULT 'CLIENTE'
);


CREATE TABLE direccion (
    id SERIAL PRIMARY KEY,
    latitud FLOAT,
    longitud FLOAT,
    usuario_id INTEGER REFERENCES usuario(id) -- Definición de la clave foránea
);





-- Insertar A administrador Pablo y Yara
INSERT INTO usuario (nombre_usuario, nombres, apellido_paterno, apellido_materno, carnet_identificacion, correo, telefono, contrasena, foto_perfil, rol)
VALUES 
('pablo_admin', 'Pablo', 'Sanabria', 'Becerra', '8765421', 'pablexsanabria@gmail.com', '70714907', '$2b$10$a5/OCNcrsUwIJQmTMU6B7usEoYef.Y70k4SRcjvPIoSlzJ0SyMCCi', 'pablito.jpg', 'ADMINISTRADOR'),
('yara_admin', 'Yara', 'Osnayo', 'Villca', '12709771', 'yaraosnayo@gmail.com', '74116628', '$2b$10$b8bFAjNb9AkaBbOepcxJ0e8zTnt6MQHlblFECa2BlcU0APrmvOFDy', 'yara.jpg', 'ADMINISTRADOR');

INSERT INTO direccion (latitud, longitud, usuario_id)
VALUES 
(-17.396607, -66.273596, 1),
(-17.421776, -66.117929, 2);


-- Insertar nuevos usuarios
INSERT INTO usuario (nombre_usuario, nombres, apellido_paterno, apellido_materno, carnet_identificacion, correo, telefono, contrasena, foto_perfil)
VALUES 
('nicanor_choque', 'Nicanor Franklin', 'Apata', 'Choque', '12344233', 'nicanorchoque@example.com', '69416504', '$2b$10$o/Rqrm.rZTpN/o/CuJalB.h1rPK5f3IhBox.MSCko3mkA5IzMXXJi', 'CLIENTE'),
('jose_atora', 'Jose Miguel', 'Atora', 'Yugar', '12491306', 'joseatora@example.com', '60394280', '$2b$10$o/Rqrm.rZTpN/o/CuJalB.h1rPK5f3IhBox.MSCko3mkA5IzMXXJi', 'CLIENTE'),
('fabrizio_balderrama', 'Fabrizio Iojhan', 'Balderrama', 'Herrera', '9516604', 'fabriziobalderrama@example.com', '62668053', '$2b$10$o/Rqrm.rZTpN/o/CuJalB.h1rPK5f3IhBox.MSCko3mkA5IzMXXJi', 'CLIENTE'),
('victor_caceres', 'Victor Manuel', 'Caceres', 'Paco', '12404853', 'victorcaceres@example.com', '65355521', '$2b$10$o/Rqrm.rZTpN/o/CuJalB.h1rPK5f3IhBox.MSCko3mkA5IzMXXJi', 'CLIENTE'),
('ingridh_coaquiramolina', 'Ingridh Mahovani', 'Coaquira', 'Molina', '13097611', 'ingridhcoaquira@example.com', '71446845', '$2b$10$o/Rqrm.rZTpN/o/CuJalB.h1rPK5f3IhBox.MSCko3mkA5IzMXXJi', 'CLIENTE'),
('leonardo_eguino', 'Leonardo Rene', 'Eguino', 'Vasquez', '7890850', 'leonardoeguino@example.com', '69461172', '$2b$10$o/Rqrm.rZTpN/o/CuJalB.h1rPK5f3IhBox.MSCko3mkA5IzMXXJi', 'CLIENTE'),
('mateo_espinoza', 'Mateo', 'Espinoza', 'Rodriguez', '8703400', 'mateoespinoza@example.com', '60371104', '$2b$10$o/Rqrm.rZTpN/o/CuJalB.h1rPK5f3IhBox.MSCko3mkA5IzMXXJi', 'CLIENTE'),
('oscar_gutierrez', 'Oscar Andres', 'Gutierrez', 'Andrade', '12975011', 'oscargutierrez@example.com', '78721085', '$2b$10$o/Rqrm.rZTpN/o/CuJalB.h1rPK5f3IhBox.MSCko3mkA5IzMXXJi', 'CLIENTE'),
('erika_mamani', 'Erika', 'Mamani', 'Mamani', '9905881', 'erikamamani@example.com', '63912009', '$2b$10$o/Rqrm.rZTpN/o/CuJalB.h1rPK5f3IhBox.MSCko3mkA5IzMXXJi', 'CLIENTE'),
('ruben_felipe', 'Ruben', 'Felipe', 'Mejia', '9391668', 'rubenfelipe@example.com', '74819122', '$2b$10$o/Rqrm.rZTpN/o/CuJalB.h1rPK5f3IhBox.MSCko3mkA5IzMXXJi', 'CLIENTE'),
('juan_narvaez', 'Juan Miguel', 'Narvaez', 'Chavez', '9873860', 'juannarvaez@example.com', '67479141', '$2b$10$o/Rqrm.rZTpN/o/CuJalB.h1rPK5f3IhBox.MSCko3mkA5IzMXXJi', 'CLIENTE'),
('gumercindo_noe', 'Gumercindo Angel', 'Noe', 'Muñoz', '7603722', 'gumercindonoe@example.com', '938848986', '$2b$10$o/Rqrm.rZTpN/o/CuJalB.h1rPK5f3IhBox.MSCko3mkA5IzMXXJi', 'CLIENTE'),
('cristian_ojalvo', 'Cristian', 'Ojalvo', 'Revollo', '9306426', 'cristianojalvo@example.com', '73692730', '$2b$10$o/Rqrm.rZTpN/o/CuJalB.h1rPK5f3IhBox.MSCko3mkA5IzMXXJi', 'CLIENTE'),
('rodrigo_ontiveros', 'Rodrigo', 'Ontiveros', 'Terceros', '9471498', 'rodrigoontiveros@example.com', '7597204', '$2b$10$o/Rqrm.rZTpN/o/CuJalB.h1rPK5f3IhBox.MSCko3mkA5IzMXXJi', 'CLIENTE'),
('brandon_perez', 'Brandon', 'Perez', 'Rivera', '8776968', 'brandonperez@example.com', '77423733', 'password123', '$2b$10$o/Rqrm.rZTpN/o/CuJalB.h1rPK5f3IhBox.MSCko3mkA5IzMXXJi'),
('carlos_ricaldes', 'Carlos Jheyson', 'Ricaldes', 'Imaca', '8049500', 'carlosricaldes@example.com', '60717670', '$2b$10$o/Rqrm.rZTpN/o/CuJalB.h1rPK5f3IhBox.MSCko3mkA5IzMXXJi', 'CLIENTE'),
('adrian_riveros', 'Adrian', 'Riveros', 'Callejas', '12873491', 'adrianriveros@example.com', '75744041', '$2b$10$o/Rqrm.rZTpN/o/CuJalB.h1rPK5f3IhBox.MSCko3mkA5IzMXXJi', 'CLIENTE'),
('pablo_rodriguez', 'Pablo', 'Rodriguez', 'Castro', '8637944', 'pablorodriguez@example.com', '60470006', '$2b$10$o/Rqrm.rZTpN/o/CuJalB.h1rPK5f3IhBox.MSCko3mkA5IzMXXJi', 'CLIENTE'),
('alison_rodriguezluizaga', 'Alison Jhanina', 'Rodriguez', 'Luizaga', '9452441', 'alisonrodriguezluizaga@example.com', '67441464', '$2b$10$o/Rqrm.rZTpN/o/CuJalB.h1rPK5f3IhBox.MSCko3mkA5IzMXXJi', 'CLIENTE'),
('sergio_uriona', 'Sergio Andre', 'Uriona', 'Arteaga', '9431380', 'sergiouriona@example.com', '77416785', '$2b$10$o/Rqrm.rZTpN/o/CuJalB.h1rPK5f3IhBox.MSCko3mkA5IzMXXJi', 'CLIENTE'),
('jose_valencia', 'Jose Rodrigo', 'Valencia', 'Diaz', '9486084', 'josevalencia@example.com', '75953266', '$2b$10$o/Rqrm.rZTpN/o/CuJalB.h1rPK5f3IhBox.MSCko3mkA5IzMXXJi', 'CLIENTE'),
('luis_zambrana', 'Luis Roberto', 'Zambrana', 'Castillo', '13751750', 'luiszambrana@example.com', '62670801', '$2b$10$o/Rqrm.rZTpN/o/CuJalB.h1rPK5f3IhBox.MSCko3mkA5IzMXXJi', 'CLIENTE');

-- Insertar direcciones aleatorias en Cochabamba, Bolivia para cada usuario
INSERT INTO direccion (latitud, longitud, usuario_id)
SELECT 
    -17.3895 + RANDOM() * 0.12 as latitud,
    -66.1561 + RANDOM() * 0.18 as longitud,
    id
FROM usuario WHERE usuario.id>2;