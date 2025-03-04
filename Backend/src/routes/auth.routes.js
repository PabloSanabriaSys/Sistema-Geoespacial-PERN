import { Router } from 'express'
import { register, login, logout, profile } from '../controllers/auth.controller.js'
import { authRequired } from '../middlewares/validateToken.js';
import { loginSchema, registerSchema } from '../schemas/auth.schema.js';
import { validateSchema } from '../middlewares/auth.middleware.js'
import { processImage } from '../middlewares/uploadImage.middleware.js'

const router = Router()

router.post('/register',processImage, validateSchema(registerSchema),register);
router.post('/login', validateSchema(loginSchema), login);
router.post('/logout', logout);
router.get('/profile', authRequired, profile);

export default router;
