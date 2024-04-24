export const validateSchema = (schema) => async (req, res, next) => {
    try {
        await schema.parse(req.body);
        next();
    } catch (error) {
        //console.log(error);
        if (Array.isArray(error.errors)) return res.status(400).json(
            { mensaje: error.errors.map((err) => err.message).join(', ') }
        )

        return res.status(400).json({ mensaje: error.mensaje })
    }
}