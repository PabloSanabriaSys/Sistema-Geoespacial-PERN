import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js';
import { getMunicipios } from '../controllers/direction.controller.js';
const router = Router()


router.get('/direction', getMunicipios);


export default router;
