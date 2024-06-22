import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js';
import { getCantonUser, getCantones, getMunicipios, getOTBs, getOTB, getUsersMunicipios, getManzanos, getManzano, getTotalDataAmount }
    from '../controllers/direction.controller.js';
const router = Router()

router.get('/direction/municipio', authRequired, getMunicipios);
router.get('/direction/municipio/:municipioName', authRequired, getUsersMunicipios);
router.get('/direction/canton', authRequired, getCantones);
router.get('/direction/canton/:cantonName', authRequired, getCantonUser);
router.get('/direction/OTB', authRequired, getOTBs);
router.get('/direction/OTB/:OTBName', authRequired, getOTB);
router.get('/direction/manzano', authRequired, getManzanos);
router.get('/direction/manzano/:manzanoName', authRequired, getManzano);
router.get('/direction/getTotalDataAmount', authRequired, getTotalDataAmount);


export default router;
