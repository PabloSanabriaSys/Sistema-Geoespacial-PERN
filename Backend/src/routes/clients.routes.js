import { Router } from 'express'
import { getAllUsers, getImage, getAllUsersDirections } from '../controllers/clients.controller.js'
import { authRequired } from '../middlewares/validateToken.js';
const router = Router()


router.get('/clients', authRequired, getAllUsers);
router.get('/clients/directions', authRequired, getAllUsersDirections);
router.get('/image/:imageName',authRequired, getImage);


export default router;
