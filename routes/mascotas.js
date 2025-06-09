import express from 'express';
import mascotasController from '../controllers/mascotasController.js';

const route = express.Router();

route.post('/', mascotasController.createMascota);
route.get('/', mascotasController.getAllMascotas);
route.get('/:id', mascotasController.getOneMascotas);
route.delete('/:id', mascotasController.deleteMascota);
route.put('/:id', mascotasController.updateMascota);

export default route;