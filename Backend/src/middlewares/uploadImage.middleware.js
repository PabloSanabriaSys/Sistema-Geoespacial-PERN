import multer from 'multer';
import sharp from 'sharp';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        req.body['foto_perfil'] = file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname).toLowerCase()
        cb(null, req.body['foto_perfil'])
    }
});

const upload = multer({ storage: storage }).single('image');

const processImage = (req, res, next) => {
    upload(req, res, async (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(400).json({ mensaje: 'Error al subir la imagen' });
        } else if (err) {
            return res.status(500).json({ mensaje: 'Error del servidor al subir la imagen' });
        }
        // Si no hay error, procesa la imagen con Sharp
        if (req.file) {
            const imagePath = req.file.path;
            const optimizedImagePath = imagePath.replace(/\.(jpg|jpeg|png)$/i, '-optimized.$1');

            try {
                await sharp(imagePath)
                    .resize(300) // Cambia el tamaño a 300 píxeles de ancho
                    .toFile(optimizedImagePath);
                req.file.path = optimizedImagePath;
                req.body['foto_perfil'] = path.basename(optimizedImagePath);
            } catch (error) {
                return res.status(500).json({ mensaje: 'Error al procesar la imagen' });
            }
        }

        next(); // Llama al siguiente middleware
    });
};

export { processImage };

