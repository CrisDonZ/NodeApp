import express from 'express';
import mascotasController from '../controllers/mascotasController.js';
import { verificarToken } from '../helpers/auth.js';

const route = express.Router();

route.post('/', mascotasController.createMascota);
route.get('/', mascotasController.getAllMascotas);
route.get('/:id', mascotasController.getOneMascotas);
route.delete('/:id',verificarToken, mascotasController.deleteMascota);
route.put('/:id',verificarToken,  mascotasController.updateMascota);

export default route;